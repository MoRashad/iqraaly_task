import React from 'react'

const SnackBar = ({ itemDeleteMessage }) => {
    return (
        <div id="toast-bottom-right" className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <div className="text-sm font-normal">{itemDeleteMessage}</div>
        </div>
    )
}

export default SnackBar