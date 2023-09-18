// Write your code here

const Message = prop => {
  const {log} = prop
  const text = log ? 'Welcome User' : 'Please Login'
  return <h1>{text}</h1>
}

export default Message
