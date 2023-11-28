
const Modal = ({modal, setModal, picture, setPicture}) => {

    const modalClickHandler = () => {
        setModal(false)
        setPicture(null)
        console.log('inside image')
    }

    return(
        <>
        {
        modal && 
        <div className="modal" onClick={modalClickHandler}>
            <div className="photo-div" onClick={modalClickHandler}>
                <img src={picture} alt ='' className="picture"/>
            </div>
         </div>
        }
         </>
    )
}

export default Modal