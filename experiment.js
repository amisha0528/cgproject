class Experiment {
  // Group Details
  static rollNos = '10983437,10983743'
  static names = 'The Tutors(Akhtar Banga, Phul Tekchand)'

  canvasSel = '#myCanvas'

  run() {

    // Run the Steppers
    // this.runSteppers()

    // Hide Steppers
    // this.hideSteppers()
    canvasSetup(this.canvasSel)

    // Clock
    // --------------------------------------------------
    const animation = new Animation('animationCanvas');
    animation.draw();

    
  }

  // runSteppers() {

  //   // Steppers
  //   // --------------------------------------------------
  //   const stepperOneRaf
	//   = window.requestAnimationFrame(stepperOne)

  //   const stepperTwoRaf
	//   = window.requestAnimationFrame(stepperTwo)

  //   const stepperThree = new StepperThree(
  //     '#valueFromStepperThree', 15
  //   )
  //   const stepperThreeFn = (ts) => {
  //     if (!stepperThree.isActive) stepperThree.start()
  //     stepperThree.step(ts)
  //     window.requestAnimationFrame(stepperThreeFn)
  //   }
  //   const stepperThreeRaf
	//   = window.requestAnimationFrame(stepperThreeFn)
  //   // --------------------------------------------------
    
  // }

  // hideSteppers() {
  //   document.querySelector('#side-note')
  //     .classList.add('hidden')
  // }
}
