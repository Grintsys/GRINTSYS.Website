import React from 'react';
import QuestionsAcordion from './QuestionAcordion';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

class Questions extends React.Component {
    render(){
        return(
			<div id="fh5co-features-3" data-section="features" className=" container">
				<Pulse>
					<div>
						<div id="content-2" className="col-md-offset-2 fh5co-section-heading text-center">
							<h2 id="questions-title" className="fh5co-lead animate-single faqs-animate-1 fadeIn animated">Preguntas Frecuentes</h2>
							<p className="fh5co-sub animate-single faqs-animate-2 fadeIn animated">Es un sistema muy novedoso que promete mucho, pero claro esto genera muchas preguntas, aquí encontrará respuesta a algunas consultas que nos han hecho sobre 2$HOP.</p>
						</div>
					</div>
				</Pulse>
				<Slide bottom>
					<QuestionsAcordion />
				</Slide>
			</div>
        )
    }
}
export default Questions;