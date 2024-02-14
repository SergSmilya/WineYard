import CustomButton from "../components/button"

function HomePage() {
  return (
    <div>
      <CustomButton color="primary" text="BROWSE WINES" width="293px" onClick={() => alert('hello')} />
    </div>
  )
}

export default HomePage