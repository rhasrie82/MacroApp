import React, { Component } from "react";


class Search extends Component {
    componentDidMount() {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', 'http://platform.fatsecret.com/js?key=a16e712a2b854584a9f70bef1064e910&auto_load=true');
        document.body.appendChild(addScript);
      }
      render() {
          console.log("I am here")
        return (
          <div>
            <a href="https://platform.fatsecret.com/api/static/sample/simple/simple.html" id="FatSecret" target="_blank"><h1>Explore Your Foods</h1></a> 
          </div>
        );
      }
    }
      
       
     

export default Search;