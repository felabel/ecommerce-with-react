import Link from 'next/link'
import { Component } from 'react'

export default class Header extends Component {
    constructor(){
        super()
        this.state={
            name:'joe'
        }
        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
    }
    showMenu(){
        // alert('hey')
        // var menuIcon = document.querySelector('.menu-icon')
        var menu = document.querySelector('.mobile-menu');
        menu.style.display = 'block'
      
        var menuIcon= document.querySelector('.menu-icon')
        menuIcon.style.display = 'none';
        var menuCancel= document.querySelector('.menu-cancel')
        menuCancel.style.display = 'block';
    }
    hideMenu(){
        var menu = document.querySelector('.mobile-menu');
        menu.style.display = 'none'
        
        var menuCancel= document.querySelector('.menu-cancel')
        menuCancel.style.display = 'none';
        var menuIcon= document.querySelector('.menu-icon')
        if (menuIcon.style.display = 'none'){
            menuIcon.style.display = 'block'
        }else{
            menuIcon.style.display = 'none'
        }

    }
    render(){
        return (
            <div className='header'>
            <Link href='/'>
                <a id='logo'><span id='elogo'>Z</span>shops </a>
            </Link>
            <span className='menu-icon' onClick={this.showMenu}>menu</span>
            <span className='menu-cancel' onClick={this.hideMenu}>X</span>
            
            <div className='header-right'>
            <form>
                <input type='text' placeholder='Search' className='search'/>
            </form>
            {/* <span className='menu-icon'>menu</span> */}
            <Link href='/'>
                <a className='shop-now'>Shop Now</a>
            </Link>
            <Link href='/'>
                <a className='shift'>Login</a>
            </Link>
            <Link href='/'>
                <a className='shift'>Register</a>
            </Link>
            <Link href='/Register'>
                <a className='shift reg'>cart</a>
            </Link>
            </div>
            {/* // responsive mobile */}
            <div className="mobile-menu">
            <form>
                <input type='text' placeholder='Search' className='search-res '/>
            </form>
            {/* <span className='menu-icon'>menu</span> */}
            <Link href='/'>
                <a className='shop-now-res'>Shop Now</a>
            </Link>
            <Link href='/'>
                <a className='shift-res'>Login</a>
            </Link>
            <Link href='/'>
                <a className='shift-res'>Register</a>
            </Link>
            <Link href='/'>
                <a className='shift-res reg-res'>cart</a>
            </Link>
            </div>
            
        </div>    
        )
    }
}