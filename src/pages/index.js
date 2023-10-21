
import { useEffect, useState } from "react"
import { CodeBlock, atomOneDark } from "react-code-blocks"

// import snippet1 from './code-snippets/snippet-1.txt';




export default function Home() {

  const [code1,setCode1] = useState('');
  const [code2,setCode2] = useState('');
  const [code3,setCode3] = useState('');
  const [code4,setCode4] = useState('');

  const test = async() => {
    
    const text = await fetch('./code-snippets/snippet-1.txt').then((data) => {
      return data.text()
    })
    setCode1(text);
    
    
    const text2 = await fetch('./code-snippets/snippet-2.txt').then((data) => {
      return data.text()
    })
    setCode2(text2)

    const text3 = await fetch('./code-snippets/snippet-3.txt').then((data) => {
      return data.text()
    })
    setCode3(text3)

    const text4 = await fetch('./code-snippets/snippet-4.txt').then((data) => {
      return data.text()
    })
    setCode4(text4)
    
  }
  
  useEffect(() => {
    test()
  }, []);


  return (
    <div className='index-body'>

       
      <div className='column-container '>

        <div className='column-panel-1 shadow-type-1'>

          <div className='w-5/6 h-5/6 text-white font-primary'>

            <div className='font-semibold text-3xl'>
              What is Kepler.io?
            </div>

            <div className='mt-5'>
            Kepler.io is a powerful tool that simplifies 
            the process of user registration and management for React 
            applications. In today's digital landscape, user authentication and 
            registration are crucial for web and mobile apps. This API provides 
            developers with a seamless solution to integrate user registration 
            within React Projects. 
            <br />
            <br />
            Developed with React in mind, it's as easy as wrapping any of your 
            inputs with one the wrappers. With Kepler, you can 
            quickly set up registration forms, validate user data, and securely store 
            user information.
            </div>

          </div>

        </div>

        <div className='column-panel-2 shadow-type-1'>
          
          <div className='w-fit h-16 ml-2 mt-2 flex items-center text-lg text-color-3 bg-color-2 font-display
          px-5 rounded-md shadow-type-2
          '>
            Setup
          </div>

          
          
          <div className=" my-5 mx-2 text-sm shadow-type-2">
            <CodeBlock
              text={code1}
              language="jsx"
              theme={atomOneDark}
              showLineNumbers={false}
              // CodeBlock
            />
          </div>

        </div>

        <div className='column-panel-3 shadow-type-1'>
          <div className='w-fit h-16 ml-2 mt-2 flex items-center text-lg text-color-3 bg-color-2 font-display
          px-5 rounded-md shadow-type-2
          '>
            Password
          </div>

          

          <div className=" my-5 mx-2 text-sm shadow-type-2">
            <CodeBlock
              text={code2}
              language="jsx"
              theme={atomOneDark}
              showLineNumbers={false}
              // CodeBlock
            />
          </div>
        </div>

        <div className='column-panel-4 shadow-type-1
        
        '>
          <div className='w-fit h-16 ml-2 mt-2 flex items-center text-lg text-color-3 bg-color-2 font-display
          px-5 rounded-md shadow-type-2
          '>
            Username
          </div>

          

          <div className=" my-5 mx-2 text-sm shadow-type-2">
            <CodeBlock
              text={code3}
              language="jsx"
              theme={atomOneDark}
              showLineNumbers={false}
              // CodeBlock
            />
          </div>

        </div>

        <div className='column-panel-5 shadow-type-1'
        >
          <div className='w-fit h-16 ml-2 mt-2 flex items-center text-lg text-color-3 bg-color-2 font-display
          px-5 rounded-md shadow-type-2 
          '>
            Password Match
          </div>

          <div className=" my-5 mx-2 text-sm shadow-type-2">
            <CodeBlock
              text={code4}
              language="jsx"
              theme={atomOneDark}
              showLineNumbers={false}
              // CodeBlock
            />
          </div>

        </div>
        


      </div>




    </div>
  )
}
