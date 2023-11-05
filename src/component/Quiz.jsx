import React, { useState } from 'react'
import './Quiz.css'

function Quiz() {



    const [color, setColor] = useState(false)
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const [option4, setOption4] = useState(false)



    const [value, setValue] = useState(0)
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const nextQuestion = () => {
        setColor(false)
        setOption1(false)
        setOption2(false)
        setOption3(false)
        setOption4(false)

        setValue(value + 1)
        console.log(value);

    }

    const wrongAnswer1 = (e) => {
        setColor(true)
        console.log(e.target.id);
        setOption1(true)
        setWrong(wrong + 1)
        console.log("wrong ans", wrong);
        // let option=document.getElementById(e.target.id)
        // option.style.backgroundColor='red'

    }
    const wrongAnswer2 = (e) => {
        setOption2(true)
        setWrong(wrong + 1)
        console.log("wrong ans", wrong);
        // const option = document.getElementById(e.target.id)
        // option.style.backgroundColor = 'red'

    }
    const wrongAnswer3 = (e) => {
        setOption3(true)
        setWrong(wrong + 1)
        console.log("wrong ans", wrong);
        // const option = document.getElementById(e.target.id)
        // option.style.backgroundColor = 'red'


    }
    const rightAnswer = () => {
        setOption4(true)
        setRight(right + 1)
        console.log("right ans:", right);
        //     const option = document.getElementById('div4')
        //     option.style.backgroundColor = 'green'

    }
    const playAgain = () => {
        setRight(0)
        setWrong(0)
        setValue(0)
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-slate-700  md:w-[500px] md:h-[550px] h-[900vh] md:mt-20 p-5 flex justify-center'>
                <div className=' w-[400px] h-[430px] mt-36 md:mt-1 bg-gray-400 rounded shadow p-4'>
                    {
                        value === 0 ?
                            <div>
                                <div className='mb-3 text-2xl'>01/10</div>
                                <div>
                                    <p className=''>1.HTML is considered as ______ ?</p>
                                    <input disabled={option2 || option3 || option4 === true} type='text' id="div1" value={'1. Programming language'} onClick={(e) => wrongAnswer1(e)} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                    <input disabled={option1 || option3 || option4 === true} id="div2" value={'2. OOP language'} onClick={(e) => wrongAnswer2(e)} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                    <input disabled={option2 || option1 || option4 === true} value={'3. High level language'} id="div3" onClick={(e) => wrongAnswer3(e)} className='mt-2 rounded h-[40px] w-[350px]  p-2 shadow options' readOnly />

                                    <input disabled={option2 || option3 || option1 === true} value={'4.  Markup language'} id='div4' onClick={(e) => rightAnswer(e)} className='mt-2 rounded h-[40px] w-[350px]  p-2 shadow options' readOnly />

                                    {/* answer 4 */}

                                    <div className='flex justify-end mt-3'>
                                        <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                    </div>
                                </div>
                            </div>
                            : (value === 1) ?
                                <div>
                                    <div className='mb-3 text-2xl'>02/10</div>
                                    <div>
                                        <p className=''>1. Which of the following is not a browser?</p>
                                        <input onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} id='div5' value={'1.  Mozilla Firefox'} className='mt-8 rounded h-[40px] w-[350px]  p-2 shadow options' readOnly />

                                        <input onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} id='div6' value={'2.  Netscape'} className='mt-2 rounded h-[40px] w-[350px]  p-2 shadow options' readOnly />

                                        <input onClick={(e) => rightAnswer(e)} disabled={option2 || option1 || option3 === true} id='div7' value={'3.  Microsoft Bing'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                        {/* answer 3 */}
                                        <input onClick={(e) => wrongAnswer3(e)} disabled={option2 || option4 || option1 === true} id='div8' value={'4. Opera'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options ' readOnly />

                                        <div className='flex justify-end mt-3'>
                                            <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                        </div>
                                    </div>
                                </div>
                                : (value === 2) ?
                                    <div>
                                        <div className='mb-3 text-2xl'>03/10</div>
                                        <div>
                                            <p className=''>1. Who is the main author of the HTML?</p>

                                            <input id="div9" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1.Brendan Eich'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                            <input id='div10' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'2. Tim Berners-Lee'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                            {/* abs 2 */}
                                            <input id="div11" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'3. Web developer'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                            <input id="div12" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. Google Inc'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options ' readOnly />

                                            <div className='flex justify-end mt-3'>
                                                <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                            </div>
                                        </div>
                                    </div>
                                    : (value === 3) ?
                                        <div>
                                            <div className='mb-3 text-2xl'>04/10</div>
                                            <div>
                                                <p className=''>1.If we want to set the style for just one element, which css selector will we use?</p>

                                                <input id='div13' onClick={(e) => rightAnswer(e)} disabled={option2 || option1 || option3 === true} value={'1. id'} className='mt-8 rounded h-[40px] w-[350px]   p-2 shadow options' readOnly />
                                                {/* ans 1 */}
                                                <input id="div14" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'2. text'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                <input id="div15" onClick={(e) => wrongAnswer2(e)} disabled={option3 || option1 || option4 === true} value={'3. class'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                <input id="div16" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. name'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options ' readOnly />

                                                <div className='flex justify-end mt-3'>
                                                    <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                </div>
                                            </div>
                                        </div>
                                        : (value === 4) ?
                                            <div>
                                                <div className='mb-3 text-2xl'>05/10</div>
                                                <div>
                                                    <p className=''>1.The HTML tag that specifies a CSS style embedded in an element is called ____?</p>

                                                    <input id="div17" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1. Design'} className='mt-8 rounded h-[40px] w-[350px]  p-2 shadow options' readOnly />

                                                    <input id='div18' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'2. Style'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                    {/* ans 2 */}
                                                    <input id="div19" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'3. Modify'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                    <input id="div20" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. Define'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />


                                                    <div className='flex justify-end mt-3'>
                                                        <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                    </div>
                                                </div>
                                            </div>
                                            : (value === 5) ?
                                                <div>
                                                    <div className='mb-3 text-2xl'>06/10</div>
                                                    <div>
                                                        <p className=''>1.The HTML standard which does not require double quotes around the values of an attribute is called ______?</p>

                                                        <input id="div21" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1. HTML 1'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                        <input id="div22" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'2. HTML 2'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                        <input id='div23' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'3. HTML 5'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                        {/* ans  3*/}
                                                        <input id="div24" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. HTML 7'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                        <div className='flex justify-end mt-3'>
                                                            <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                        </div>
                                                    </div>
                                                </div>
                                                : (value === 6) ?
                                                    <div>
                                                        <div className='mb-3 text-2xl'>07/10</div>
                                                        <div>
                                                            <p className=''>1. A stricter type of HTML document is known as ______?</p>

                                                            <input id="div25" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1. DHTML'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                            <input id='div26' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'2. XHTML'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                            {/* ans 2 */}
                                                            <input id="div27" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'3. XML'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                            <input id="div28" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. HTML'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                            <div className='flex justify-end mt-3'>
                                                                <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    : (value === 7) ?
                                                        <div>
                                                            <div className='mb-3 text-2xl'>08/10</div>
                                                            <div>
                                                                <p className=''>1.Which organization defines Web standards?</p>

                                                                <input id="div29" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1.  Apple Inc.'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                <input id="div30" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'2. IBM Corporation'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                <input id='div31' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'3.  World Wide Web Consortium'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                {/* ans 3 */}
                                                                <input id="div32" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. Microsoft Corporation'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                                <div className='flex justify-end mt-3'>
                                                                    <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        : (value === 8) ?
                                                            <div>
                                                                <div className='mb-3 text-2xl'>09/10</div>
                                                                <div>
                                                                    <p className=''>1. The property in CSS used to change the background color of an element is -?</p>

                                                                    <input id="div33" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1. bgcolor'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                    <input id="div34" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'2. color'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                    <input id='div35' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'3. background-color'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                    {/* ans 3 */}
                                                                    <input id="div36" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. All of the above'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                                    <div className='flex justify-end mt-3'>
                                                                        <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            : (value === 9) ?
                                                                <div>
                                                                    <div className='mb-3 text-2xl'>10/10</div>
                                                                    <div>
                                                                        <p className=''>1.The CSS property used to control the element's font-size is -?</p>

                                                                        <input id="div37" onClick={(e) => wrongAnswer1(e)} disabled={option2 || option3 || option4 === true} value={'1. text-style'} className='mt-8 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                        <input id="div38" onClick={(e) => wrongAnswer2(e)} disabled={option1 || option3 || option4 === true} value={'2. text-size'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                        <input id='div39' onClick={(e) => rightAnswer(e)} disabled={option2 || option3 || option1 === true} value={'3. font-size'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />
                                                                        {/* ans 3 */}
                                                                        <input id="div40" onClick={(e) => wrongAnswer3(e)} disabled={option2 || option1 || option4 === true} value={'4. None of the above'} className='mt-2 rounded h-[40px] w-[350px] p-2 shadow options' readOnly />

                                                                        <div className='flex justify-end mt-3'>
                                                                            <button onClick={() => nextQuestion()} className='btn btn-primary justify-between w-[90px]'>Next</button>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className='w-[100%] h-[100%] bg-slate-800 relative'>
                                                                    <h1 className='text-center text-white text-2xl'>Quiz Result</h1>
                                                                    <img width={'100px'} className='ml-32 mt-4' src="https://th.bing.com/th/id/R.7e0fa2529500d6bc8e9f412524b1a7a3?rik=teNkt3rIPC9rcQ&riu=http%3a%2f%2fsweetclipart.com%2fmultisite%2fsweetclipart%2ffiles%2ftrophy_golden.png&ehk=6wXoX7q84ZfDhxpDc9WR4Zyy526oosyFlGSVOKTbXRM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                                                    <p className='text-center text-white mt-2'>CORRECT</p>
                                                                    <p className='text-lime-600 text-center mt-3 text-4xl'>{right}<span className='text-white'>/10</span></p>
                                                                    <p className='text-center text-white mt-2'>EARNED SCORE</p>
                                                                    <p className='text-center text-white text-3xl'>{5*right}</p>
                                                                    {/* <div className='mb-3 text-5xl text-center'>RESULT</div>
                                                                    <p className='text-center text-lg'>Total Questions : 10</p>
                                                                    <p className='text-center text-5xl mt-3'>Score</p>
                                                                    <h1 className='text-center text-2xl mt-3'><span className='text-6xl'>{5 * right}</span>/50</h1>
                                                                    <div className='flex justify-center text-center'>
                                                                        <p className='text-xl'>Correct Answer : {right}</p>
                                                                        <p className='ml-5 text-xl'>Wrong Answer: {wrong}</p>
                                                                    </div>
                                                                    <div className='flex justify-center mt-4'>
                                                                        <button className='btn btn-primary' onClick={() => playAgain()}>Play Again</button>

                                                                    </div> */}
                                                                </div>
                    }
                </div>

            </div>

        </div>)
}

export default Quiz