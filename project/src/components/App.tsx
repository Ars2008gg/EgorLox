import React from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import IceCream from '@/assets/icecream_jpg.jpg'
import IceCreamPng from '@/assets/chocolate_png.png'
import IceCreamSvg from '@/assets/icecream_svg.svg'

export default function App() {
  
  // if(_PLATFORM_ === 'desktop'){
     
  // }

  // if(_PLATFORM_ === 'mobile'){
  //   return <div>ISMOBILE</div>
  // }

  type Dimon = 1 | 2 | undefined

  interface User {
    id: number,
    name: string,
    age?: number, 
    readonly secondName: string,
    move(): void,
    myAlert(words: string): void,
    student: Dimon
  }

  interface User2 extends User {
    fill(): void
  }

  interface SingleArray{
    [index: number]: string
  }
  let name: SingleArray = ['Костя', 'Игорь', 'Владос', 'Максим', 'Димон']
  console.log(name)

  interface StringArray{
    [index: string]: string
  }
  let colors: StringArray = {}
  colors['black'] = '#000000'
  colors['white'] = '#ffffff'
  colors['red'] = '#ff0000'

  console.log(colors)

  let empty: User = {
    id: 123,
    name: 'Polina',
    secondName: 'Safronova',
    move(){
      console.log('Функция работает!')
    },
    myAlert(words) {
      console.log(`Привет, я ${words}`)
    },
    student: undefined
  }

  empty.move()
  empty.myAlert('Егор!')

  console.log('id: ', empty.id)
  console.log('name: ', empty.name)
  console.log('second name: ', empty.secondName)
  console.log('студент: ', empty.student + 5)

  return (
    <div>
      {/* <h1>{_PLATFORM_}</h1> */}
      <img src={IceCream} alt="" />
      <img src={IceCreamPng} alt="" />
      <IceCreamSvg className={classes.icon}/>
      <h1>0</h1>
      <input className={classes.inp} type="text" /> <br />
      <button className={classes.btn}>Button</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <Outlet/>
    </div>
  )
}
