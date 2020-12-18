import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Search } from './Search';

export function MealDetails() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div>
                <Button
                    onClick={() => setShow(true)}
                    variant="danger"
                    >
                        Search for Recipes
                </Button>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    // dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <h2>Search</h2>                        
                    </Modal.Header>
                    <Modal.Body>
                        <Search/>                        
                    </Modal.Body>
                </Modal>
            </div>
            <div>
                <h5>
                    Breakfast
                </h5>
            </div>
            <div>
                <h5>
                    Lunch
                </h5>
            </div>
            <div>
                <h5>
                    Dinner
                </h5>
            </div>
        </div>
    );
}