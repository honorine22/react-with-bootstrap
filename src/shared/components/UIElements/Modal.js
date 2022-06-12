import React from 'react';

function Modal({ content, closeMapHandler, showMap }) {
    return (
        <div className='toast-container'>
            <div className={`${showMap ? '' : 'modal fade'}`}>
                <div className="modal-dialog modal-lg shadow p-3 mb-5 bg-body rounded">
                    <div className="modal-content border-0">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" onClick={closeMapHandler}></button>
                        </div>
                        <div className="modal-body border-0">
                            {content}
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" onClick={closeMapHandler}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;