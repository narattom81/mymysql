import React  from 'react'
export default class AddBook extends React.Component{
    constructor(){
        super();
        this.state={
            bookname:'',
            author:'',
        }
    }
    
    updateInfo=(event)=>{
        let fieldName=event.target.name;
        let fieldValue=event.target.value;
        if(fieldName==='bookname'){
            this.setState({bookname:fieldValue})
        }else if(fieldName==='author'){
            this.setState({author:this.fieldValue})
        }

        console.log(fieldName+" "+fieldValue)
    }

    addBook=(e)=>{
        var bookname=this.state.bookname;
        var writter="dddddddddddd";

        console.log(bookname+"  "+writter)
        const res=fetch('http://localhost:3000/add_book',{
            method:'post',
            headers:{'Content-Type':'application/json'},                        
            body: JSON.stringify({
                bookname:bookname,author:writter
            })
        })
    console.log(res)    
    return res;
    }

    render(){
        return(
            <div className="add_book">
                <div>
                    <label>Book Name</label>
                    <input onChange={this.updateInfo} name="bookname" value={this.state.bookname} />
                </div>
                {/* <div>
                    <label>Author</label>
                    <input onChange={this.updateInfo} name="author" value={this.state.author} />
                </div> */}
                <button onClick={this.addBook}>addBook</button>
            </div>
        )
    }
}