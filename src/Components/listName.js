import React from "react";

const ListName = () => {
    return (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">
                Hello, world! This is a toast message.
                <div className="mt-2 pt-2 border-top">
                    <button type="button" className="btn btn-primary btn-sm">Create List</button>
                </div>
            </div>
        </div>
    );
}

export default ListName;