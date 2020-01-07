import React from 'react';
import QuestionsAcordion from './QuestionAcordion';


class Questions extends React.Component {
    render(){
        return(
            <div id="fh5co-features-3" data-section="features" class=" container">
						<div>
							<div id="content-2" class="col-md-offset-2 fh5co-section-heading text-center">
								<h2 id="questions-title" class="fh5co-lead animate-single faqs-animate-1 fadeIn animated">Preguntas Frecuentes</h2>
								<p class="fh5co-sub animate-single faqs-animate-2 fadeIn animated">Es un sistema muy novedoso que promete mucho, pero claro esto genera muchas preguntas, aquí encontrará respuesta a algunas consultas que nos han hecho sobre 2$HOP.</p>
							</div>
						</div>
                        <QuestionsAcordion/>
					</div>
        )
    }
}
export default Questions;