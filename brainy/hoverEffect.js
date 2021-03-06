// let el = document.getElementsByClassName("screenshot")
// console.log(el)

class HoverEffect3D 
{
    constructor(id)
    {
        this.id = id;
        this.xOffset = 3;
        this.yOffset = 3;
        this.attack = 0.1;
        this.release = 0.5;
        this.create();
    }

    create()
    {
        document.querySelectorAll(this.id).forEach(element => 
        {
            const rectTransform = element.getBoundingClientRect();

            element.style.setProperty("transform-style", "preserve-3d");
            
            element.addEventListener("mouseenter", e =>
            {
                element.style.setProperty("transition", "transform " + this.attack + "s");
            })

            element.addEventListener("mousemove", e => 
            {
                let dy = e.clientY - rectTransform.top;
                let dx = e.clientX - rectTransform.left;
                let xRot = this.map(dx, 0, rectTransform.width, -this.xOffset, this.xOffset);
                let yRot = this.map(dy, 0, rectTransform.height, this.yOffset, -this.yOffset);
                let propXRot = "rotateX(" + yRot + "deg) ";
                let propYRot = "rotateY(" + xRot + "deg)";

                element.style.setProperty("transform", "perspective(500px) " + propXRot + propYRot);
            })

            element.addEventListener('mouseleave', e => {
                element.style.setProperty("transition", "transform " + this.release + "s");
                element.style.setProperty("transform", "perspective(500px) rotateX(0deg) rotateY(0deg)");
            })
        })
    }

    map(value, istart, istop, ostart, ostop) 
    {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
}

let hoverEffect = new HoverEffect3D(".screenshot");
// hoverEffect.id = ;
// hoverEffect.create();

// let hoverEffect2 = new HoverEffect();
// hoverEffect2.id = ".storeButton";
// hoverEffect2.create();

// hoverEffect.process()
// hoverEffect.xOffset = 5
// hoverEffect.yOffset = 5




