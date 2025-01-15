const ChatMsgCard = ({ chatMessages }) => {
	const { image, messages, timeStamp, isSender } = chatMessages
	return (
		<div className="media">
			{isSender && (
				<div className="media-img">
					<img src={image} alt="user" className="rounded-circle thumb-sm" />
				</div>
			)}
			<div className={`media-body ${!isSender ? 'reverse' : ''}`}>
				{(messages || []).map((msg, idx) => (
					<div className="chat-msg" key={idx}>
						<p>{msg.message}</p>
					</div>
				))}
				{timeStamp && <div className="chat-time">{timeStamp}</div>}
			</div>
			{!isSender && (
				<div className="media-img">
					<img src={image} alt="user" className="rounded-circle thumb-sm" />
				</div>
			)}
		</div>
	)
}
export default ChatMsgCard
