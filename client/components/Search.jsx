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

        if (this.state.filter === 'title') {
            this.setState({ projects: projects.filter(project => project.title.toLowerCase().includes(evt.target.value.toLowerCase())) })
        } else {
            this.setState({
                projects: projects.filter(project => {

                    for (let i = 0; i < project.tags.length; i++) {
                        if (project.tags[i].toLowerCase().includes(evt.target.value.toLowerCase())) {
                            return true
                        }
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
                    <div className={`${this.state.filter === 'title' ? 'selected ' : ''} button`} onClick={() => this.setState({ filter: 'title' }, () => console.log(this.state.filter))}>title</div>
                    <div className={`${this.state.filter === 'hashtags' ? 'selected ' : ''} button`} onClick={() => this.setState({ filter: 'hashtags' }, () => console.log(this.state.filter))}>hashtags</div>
                    <input className="input" type="text" placeholder={this.state.filter === 'title' ? "search for project title": "search for project hashtag"} onChange={this.handleChange} />
                </div>

                <Projects projects={this.state.projects} />
            </>
        )
    }
}

export default Search