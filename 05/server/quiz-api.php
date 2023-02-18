<?php

// Get Quiz from server

/*
// we will get the questions from the database
// database connection parameters
$host = "localhost";
$dbname = "tsr_account";
$username = "root";
$password = "Mahdi@786";

// create a PDO connection to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed to connect to database: " . $e->getMessage();
    exit();
}

$sql = 'select 
            qq.id,
            qq.question,
            qq.option1 answer,
            qq.option2 option1,
            qq.option3 option2,
            qq.option4 option3
        from spot_quizzes q
        inner join spot_quiz_questions qq on q.id = qq.spot_quiz_id
        where q.id=1
        order by id';
$stmt = $pdo->prepare($sql);
$stmt->execute();
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);
*/

$questions = json_decode('[
    {
      "id": 959,
      "question": "How many verses are there in Surah al-Fatihah?",
      "answer": "7",
      "option1": "6",
      "option2": "8",
      "option3": "5"
    },
    {
      "id": 960,
      "question": "Which is the first verse of Surah al-Fatihah?",
      "answer": "Bismillah",
      "option1": "Alhamdolillah",
      "option2": "Fataha Allah",
      "option3": "Fatihatul Kitab"
    },
    {
      "id": 961,
      "question": "What is the reward of reciting Surah al-Fatihah",
      "answer": "2/3 of the Holy Quran",
      "option1": "Full Quran",
      "option2": "1/3 of the Holy Quran",
      "option3": "1/2 of the Holy Quran"
    },
    {
      "id": 962,
      "question": "In Surah al-Fatihah, The Straight Path (Serat al-Mustaqeem) refers to",
      "answer": "Imam Ali (a)",
      "option1": "Doing good deeds",
      "option2": "Holy Prophet (s)",
      "option3": "Being a good Muslim"
    },
    {
      "id": 963,
      "question": "Surah al-Fatihah is also known as ",
      "answer": "Surah al-Hamd",
      "option1": "Surah Saba",
      "option2": "Surah Noor",
      "option3": "Surah Rahman"
    }
  ]', true);

// Save the attempt of the user for the quiz

$action = $_GET['action'] ?? null;

if($action == 'questions') {
    $result = [];
    foreach($questions as $idx => $q) {

        $temp['id'] = $q['id'];
        $temp['question'] = $q['question'];

        $temp['options'] = [
            $q['answer'],
            $q['option1'],
            $q['option2'],
            $q['option3'],
        ];

        shuffle($temp['options']);

        $result[] = $temp;
    }
    json($result);
}

if($action == 'answers') {
    $data = json_decode(file_get_contents('php://input'), true);

    $questionIds = $data['questionIds'];
    $answers = $data['answers'];

    $response = [];

    foreach($questionIds as $idx => $qId) {
        $answer = $answers[$idx];

        foreach($questions as $q) {
            if( $q['id'] == $qId) {
                $response[] = [
                    'correct_answer' => $q['answer'],
                    'your_answer' => $answer,
                ];
            }
        }
    }

    json($response);
}

function json($data) {
    header('Content-Type: application/json');
    echo json_encode($data);
    die();
}