var React = require('react')
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  },
  getDefaultProps: function() {
    return {
      title: 'Error',
    }
  },
  componentDidMount: function() {
    var { title, message } = this.props
    var modalStructure = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{ title }</h4>
        <p>{ message }</p>
        <p>
          <button data-close="" className="button expanded hollow">OK</button>
        </p>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalStructure))
    $(ReactDOM.findDOMNode(this)).html($modal)

    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  },
  render: function() {
    return (
      <div></div>
    )
  }
})

module.exports = ErrorModal
