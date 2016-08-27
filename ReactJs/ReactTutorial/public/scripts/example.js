var Button = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },
    render() {
        var text = this.props.text    
        return <div>
            <button>{text}</button>
        </div>
    }
});
var Message = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        children: React.PropTypes.object,
        author: React.PropTypes.string.isRequired
    },
    render() {
        var title = this.props.title;
        var text = this.props.children || 'Mensagem padrão';
        var author = this.props.author;
        return (
            <div className="message">
                <h3>{title}</h3>
                <p>{text}</p>
                <Button text={text}/>
                <p>{author}</p>

            </div>
        );
    }
});
ReactDOM.render(
    <Message title="Curso React" author="Carlos Fattor">
        
    </Message>,
    document.getElementById('content')
);