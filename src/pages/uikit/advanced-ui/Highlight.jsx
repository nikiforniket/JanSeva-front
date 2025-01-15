import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import Prism from 'prismjs'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import 'prismjs/themes/prism-okaidia.css'
function Code({ code, language }) {
	useEffect(() => {
		Prism.highlightAll()
	}, [])
	return (
		<div className="Code">
			<pre>
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</div>
	)
}
const HtmlHighlights = () => {
	const code = `  <div class="card-header">
     <h4 class="card-title">Clipboard Examples of Textarea</h4>
     <p class="text-muted mb-0">Textarea example of clipboard</p>
  </div>
`
	return (
		<ComponentContainerCard
			title="HTML Highlight"
			description="It will automatically be pretty-printed."
		>
			<Code code={code} language="html" />
		</ComponentContainerCard>
	)
}
const CssHighlight = () => {
	const code = `.example {
    font-family: Georgia, Times, serif;
    color: #555;
    text-align: center;
}
`
	return (
		<ComponentContainerCard
			title="Css Highlight"
			description="It will automatically be pretty-printed."
		>
			<Code code={code} language="css" />
		</ComponentContainerCard>
	)
}
const Highlight = () => {
	return (
		<>
			<PageBreadcrumb title="Highlight" subName="Advanced UI" />
			<Row>
				<Col lg={6}>
					<HtmlHighlights />
				</Col>
				<Col lg={6}>
					<CssHighlight />
				</Col>
			</Row>
		</>
	)
}
export default Highlight
