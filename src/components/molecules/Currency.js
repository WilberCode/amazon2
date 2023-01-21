 
const Currency = ({total}) => {
  return (
    <span className="font-medium" >S/{total.toFixed(2)}</span>
  )
}

export default Currency