import React from 'react';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: '¿Necesito un Smart Phone de Alta Gama para usar 2$HOP?',
    paragraph
  },
  {
    title: '¿Con qué tipo de Sistemas de Inventario y Control trabaja 2$HOP?',
    paragraph
  },
  {
    title: '¿Hay un límite en la cantidad de usuarios que pueden usar 2$HOP?',
    paragraph
  },
  {
    title: '¿Cuánto Cuesta 2$HOP?',
    paragraph
  }
]

class QuestionAcordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}
export default QuestionAcordion;