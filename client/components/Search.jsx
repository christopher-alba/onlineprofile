import React, { Component } from 'react'
import Projects from './Projects'
import projects from '../projects'
import './search.css'
class Search extends Component {

    state = {
        projects: projects,
        filter: 'title'
    }

    handleChange = (evt) => {

        let strings = evt.target.value.split(" ")

        for(let i = 0; i < strings.length; i++){
            if(strings[i] === ""){
                strings.splice(i,1)
                i--
            }
        }
        if (this.state.filter === 'title') {
            this.setState({ projects: projects.filter(project => project.title.toLowerCase().includes(evt.target.value.toLowerCase())) })
        } else {
            this.setState({
                projects: projects.filter(project => {
                    let counter = 0
                    for (let j = 0; j < strings.length; j++) {
                        for (let i = 0; i < project.tags.length; i++) {
                            if (project.tags[i].toLowerCase().includes(strings[j].toLowerCase())) {
                                counter ++
                            }
                        }
                    }

                    if(counter === strings.length){
                        return true
                    }

                    return false

                })
            })
        }

    }

    render() {
        return (
            <>
                <div className="searchBar">
                    <div className={`${this.state.filter === 'title' ? 'selected ' : ''} button`} onClick={() => {
                        
                        this.setState({ filter: 'title' })
                        document.getElementsByClassName("input")[0].value = ''
                        this.handleChange({target:{
                            value: ''
                        }})

                    }}>title</div>
                    <div className={`${this.state.filter === 'hashtags' ? 'selected ' : ''} button`} onClick={() => {
                        
                        this.setState({ filter: 'hashtags' })
                        document.getElementsByClassName("input")[0].value = ''
                        this.handleChange({target:{
                            value: ''
                        }})
                        
                    }}>hashtags</div>
                    <input className="input" type="text" placeholder={this.state.filter === 'title' ? "search for project title" : "search for project hashtag"} onChange={this.handleChange} />
                </div>

                <Projects projects={this.state.projects} />
            </>
        )
    }
}

export default Search