import { Circle } from "./class/Circle.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')

const updateUI = (label3,label4)=> {
	document.querySelector('div#third label').innerHTML = label3
	
	if (label4 !==undefined) {
		document.querySelector('div#fourth label').innerHTML = label4
		document.querySelector('div#fourth label').style.display = "inline-block"
		document.querySelector('div#fourth input').style.display = "inline-block"
	} else { 
		document.querySelector('div#fourth label').style.display = "none"
		document.querySelector('div#fourth input').style.display = "none"
	}
}

radio_form.addEventListener('click',() => {
	const shape = radio_form['shape'].value
	switch (shape) {
		case 'line':
		updateUI('x2','y2')
		break
		case 'circle':
		updateUI('width:')
		break
		case 'rectangle':
		updateUI('width:', 'height:')
		break
		case 'square':
		updateUI('width:')
		break
	}	
})

draw_button.addEventListener('click',() => {
	const shape = radio_form['shape'].value
	switch (shape) {
		case 'line':
		
		break
		case 'circle':
		drawCircle();
		break
		case 'rectangle':
		drawRectangle();
		break
		case 'square':
		drawSquare();
		break
	}
})

const drawCircle = () => {
	const x = x_input.value
	const y = y_input.value
	const width = document.querySelector('div#third input').value
	const lineWidth = lineWidth_input.value
	const circle = new Circle(x,y,width/2)
	circle.setLineWidth = lineWidth
	circle.draw(ctx) {
		ctx.beginPath()
		ctx.arc(this._x,this._y,this.#radius, 0, 2 * Math.PI)
		ctx.lineWidth = this._lineWidth
		ctx.stroke()
	}
}

const drawSquare = () => {
	const x = x_input.value
	const y = y_input.value
	const width = document.querySelector('div#third input').value
	const height = document.querySelector('div#fourth input').value
	const lineWidth = lineWidth_input.value
	const square = new Square(x * height)
	square.setLineWidth = lineWidth
	square.draw(ctx) {
		ctx.beginPath()
		ctx.lineWidth = this._lineWidth
		ctx.moveTo(x,y)
		ctx.lineTo(y, width)
		ctx.lineTo(width, width)
		ctx.lineTo(width, x)
		ctx.lineTo(x, y)
		ctx.stroke()		
}


const drawRectangle = () => {
	const x = x_input.value
	const y = y_input.value
	const width = document.querySelector('div#third input').value
	const height = document.querySelector('div#fourth input').value
	const lineWidth = lineWidth_input.value
	const rectangle = new Rectangle(x, y, width, height)
	rectangle.setLineWidth = lineWidth
	rectangle.draw(ctx) {
		ctx.beginPath()
		ctx.lineWidth = this._lineWidth
		ctx.moveTo(x,y)
		ctx.lineTo(y, width)
		ctx.lineTo(width, height)
		ctx.lineTo(height, x)
		ctx.lineTo(x, y)
		ctx.stroke()		
}


export class Shape {
	_x
	_y
	_lineWidth
	
	constructor(x,y,_lineWidth = 1) {
		this._x = x
		this.y =y
		this._lineWidth= _lineWidth
	}
	
	set setLineWidth(lineWidth) {
		this._lineWidth = lineWidth
	}
}


	


