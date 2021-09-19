import React,{useState,useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import db from './firebase'

export default function Edittask({modal,toggle,taskobj,obj}) {
    const [taskname, setTaskname] = useState('');
    const [desc, setDesc] = useState('');
    const handleupdate=(e)=>{
      //  e.preventDefault();
       let temp={}
       console.log("1 ." + temp.desc)
     
       temp['name']=taskname
       temp['desc']=desc
       console.log("2 ." + temp.desc)

       db.collection('tasklist').doc(obj.id).set({
         name: temp.name,
         desc:temp.desc,
     },{merge:true});
     console.log(temp)
     toggle();
   //     update(temp,index)

    }

    useEffect(() => {
       setTaskname(taskobj.name)
       setDesc(taskobj.desc)
        },[taskobj])

    
    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
         <form>
         <div className="form-group">
         <label> Task Name</label>
         <input type="text" value={taskname} onChange={(event)=>{setTaskname(event.target.value)}} className="form-control"/>
         </div>
         <div className="form-group">
         <label> Description</label>
         <textarea rows="5" value={desc} onChange={(event)=>{setDesc(event.target.value)}} className="form-control"></textarea>
         </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e)=>handleupdate(e)}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
}
