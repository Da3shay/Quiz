import React,{useState}  from 'react'
import './quiz.scss'
import questions from './questions.js'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import {  dodge,kia,maz,opel} from  './Assets/icon'



const useStyles = makeStyles({
    btn1: {

        width:"200px",
        margin:"100px"
 
  
    },
    rebtn:{
      width:"300px"

    }
  
     
  
  });

export default function Quiz({setval,val}) {
    const classes = useStyles();


    
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const start=(() =>{

        setval(!val);
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
      
        })

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
          
			setShowScore(true);

          
		}
	};

    return (
<>

        {
            
            val ? 
              <div className="quiz">
        
        <div className="quizcontent">

        {showScore ? (
            <div className='score-section'>
                <div style={{marginBottom:"20px"}}>

                You scored {score} out of {questions.length}
          
              
            
                </div>
                <div>
                <Button className={classes.rebtn} variant="outlined"  onClick={start} color="error">
     Reset
      </Button>
      </div>
            
            </div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                    
                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
        )}

</div>


 
    </div> 
    
    : " "}
          </> 
    )

}
