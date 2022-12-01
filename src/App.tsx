import './App.scss'
import OrderSummary from './components/OrderSummary'
import patternd from './assets/pattern-background-desktop.svg'
import patternm from './assets/pattern-background-mobile.svg'

function App() {

  return (
    <div className='App'>
      <picture>
        <source media="(min-width:650px)" srcSet={patternd} />
        <source media="(min-width:375px)" srcSet={patternm} />
        <img src={patternd} alt="" />
      </picture>
      <OrderSummary />
    </div>
  )
}

export default App
