import React from "react";
import '../styles/App.css';
import { useEffect } from "react";


function SectionView(props) {
    useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add('show');
          }
          else{
            entry.target.classList.remove('show');
          }
        });
      });
    
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
})
    return(
    <>
    <section className="hidden">
    <h1>
        {props.head1}
    </h1>
    <p>
        {props.para1}
    </p>
    </section>
    <section className="hidden">
    <h1>
        {props.head2}
    </h1>
    <p>
        {props.para2}
    </p>
    </section>
    <section className="hidden">
    <h1>
        {props.head3}
    </h1>
    <p>
        {props.para3}
    </p>
    <div className="logos">
        <div className="logo hidden">
            <img src={props.img1} alt="" srcset="" />
        </div>
        <div className="logo hidden">
            <img src={props.img2} alt="" srcset="" />
        </div>
        <div className="logo hidden">
            <img src={props.img3} alt="" srcset="" />
        </div>
        <div className="logo hidden">
            <img src={props.img4} alt="" srcset="" />
        </div>
    </div>
    </section>
    </>);
}

export default SectionView;