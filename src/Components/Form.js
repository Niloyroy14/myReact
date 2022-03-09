import React from "react";



class Form extends React.Component{

    state = {
        title: 'javaScRIPT',
        textarea: 'javaScRIPT is Awsome',
        library: 'React',
        isAwsome: true
    };

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value,
        });

        // if (e.target.type == 'text') {
        //     this.setState({
        //         title: e.target.value
        //     })
            
        // } else if (e.target.type == 'textarea') {
        //     this.setState({
        //         textarea: e.target.value
        //     })
        // } else if (e.target.type == 'select-one') {
        //     this.setState({
        //         library: e.target.value
        //     })
        // } else if (e.target.type == 'checkbox') {
        //     this.setState({
        //         isAwsome: e.target.checked
        //     })
        // }
       
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { title, textarea, library, isAwsome } = this.state;

        console.log(title);
        console.log(textarea);
        console.log(library);
        console.log(isAwsome);
    }
  
    render() {
        const { title, textarea, library, isAwsome } = this.state;
        return (
            <div style={{ marginTop: '70px'}}>
                 <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Enter your name" />
                    <p>{title} </p>
                    <br/>
                    <br/>
                    <textarea name="textarea" value={textarea} onChange={this.handleChange} > </textarea>
                    <p>{textarea} </p>
                    <br />
                    <br />
                    <select name="library" value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" name="isAwsome" checked={isAwsome} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit"/>
                 </form>
            </div>
             

        );
    }

}


export default Form;