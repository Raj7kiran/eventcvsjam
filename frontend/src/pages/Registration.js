import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'


const Registration=()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [preferredType, setPreferredType] = useState('')
    const [finalType, setFinalType] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')

    useEffect=(()=>{
        setLoading(false)
        setSuccess(false)
    },[])

    const submitHandler = () => {
        console.log('state', name, email, preferredType, finalType)
        setSuccess(false)
        const config ={
            headers : {	'Content-Type' : 'application/json'	}
        }
        if(name == '' || email == ''){
            setMessage('Please fill the required fields')
        } else {
            setLoading(true)
            setMessage('')
            axios.post('api/users',{ name, email, preferredType, finalType}, config)
                .then((response) => {
                    console.log('res', response)
                    if(response.status == 201 || response.status == 200){
                        setLoading(false)
                        setSuccess(true)
                        setName('')
                        setEmail('')
                        setFinalType('')
                        setPreferredType('')
                    } else {
                        setMessage('Oops! Something went wrong. Please try again!')
                    }
                })
                .catch(err => {
                    console.log('err', err)
                    setLoading(false)
                    if(err.response.data.message){
                        setMessage(err.response.data.message)
                    } else {
                        setMessage('Oops! Something went wrong. Please try again!')
                    }
                    
                })
        }
    }

    return(
        <div className="container register-form" style={{height:'calc(100vh - 80px)'}}>
            {
                loading && <Loader />
            }
            {
                success && <Message variant='primary'>Registered Sucessfully</Message>
            }
            {
                message &&  <Message variant='danger'>{message}</Message>
            }
            <div className="form">
                <div className="form-content">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="Mail Id *" />
                            </div>
                            <div className="form-group">
                                <select onChange={e => setFinalType(e.target.value)} value={finalType} className="form-control" name="" id="">
                                    <option className="form-control" value=''>Select Final Type</option>
                                    <option className="form-control" value='technical'>Technical</option>
                                    <option className="form-control" value='non-technical'>Non-technical</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select onChange={e => setPreferredType(e.target.value)} value={preferredType} className="form-control" name="" id="">
                                    <option className="form-control" value=''>Select Preferred Type</option>
                                    <option className="form-control" value='analytical'>Analytical</option>
                                    <option className="form-control" value='coding'>Coding</option>
                                </select>
                            </div>
                        </div>
                    
                    </div>
                    <button onClick={submitHandler} type="button"  className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
    )
}


export default Registration