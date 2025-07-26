function Button({ children, bgColor, onClick }) {
    return (
        <button style={{
            backgroundColor: bgColor,
            color: '#fff',
            padding: '8px 15px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
        }} onClick={onClick}>{children}</button>
    );
}

export default Button;