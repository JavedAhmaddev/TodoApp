import React, { useState, useEffect } from 'react'
import Card from './Card'
import CreateTask from './CreateTask'
import db from './firebase'
import firebase  from 'firebase'


export default function TodoList() {


    const [modal, setModal] = useState(false);
    const [tasklist, setTasklist] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(()=>{

        db.collection('tasklist').orderBy('timestamp','desc').onSnapshot(snapshot => {
            
            setTasklist(snapshot.docs.map(doc => ({id:doc.id , name:doc.data().name, desc:doc.data().desc })));
          })
        // let arr= localStorage.getItem("tasklist")
        // console.log(arr)
        // if(arr){
        //     let obj=JSON.parse(arr)
        //     setTasklist(obj)
        // }
    },[])
    

    const saveTask = (taskobj) => {

        db.collection('tasklist').add({
            name:taskobj.name,
            desc:taskobj.desc,     
            timestamp:firebase.firestore.FieldValue.serverTimestamp() // add time by firebase server in feild name timestamp
          })

        // let templist=tasklist
        // templist.push(taskobj)
        // localStorage.setItem("tasklist",JSON.stringify(tasklist))
        // setTasklist(templist)
        
        // setTasklist([...tasklist, taskobj]) 
    }

    
    // const deleteTask = (index) => {


        
    //     let tempList = tasklist
    //     tempList.splice(index, 1)
    //     localStorage.setItem("tasklist", JSON.stringify(tempList))
    //     setTasklist(tempList)
    //     window.location.reload()
    // }
    
    const updateListarray = (obj, index) => {
        let tempList = tasklist
        
        tempList[index] = obj
        console.log(tempList)
        localStorage.setItem("tasklist", JSON.stringify(tempList))
        setTasklist(tempList)
        
        window.location.reload()
        

    }

    return (
        <>
            <div className="header text-center">
                <h3> Todo List </h3>
                <button className="btn btn-primary" onClick={() => { setModal(true) }}> Create Task</button>
            </div>
            <CreateTask toggle={toggle} modal={modal} tasklist={tasklist} save={saveTask} setModal={setModal} />
            <div className="task-container">
                
                {tasklist && tasklist.map((obj, index) => <Card key={index} taskobj={obj}  updateListarray={updateListarray} obj={obj} index={index} /> )}
                
            </div>

        </>
    )
}
