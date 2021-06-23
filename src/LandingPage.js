import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage({show_page}) {

    function handelPageSwitch(){
        show_page
    }

    return (
            <div className="container">
                <div className="homepage_title">React 練習專案</div>
                <div className="homepag_main">歡迎光臨我的頁面</div>
                <Link to='/list'>
                    <input type="submit" value="點此開始" className="homepage_button" />
                </Link>

            </div>
    )
}
