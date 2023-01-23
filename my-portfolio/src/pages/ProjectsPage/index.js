import React from 'react'

import './ProjectsPage.css'

export default function ProjectsPage(){
    return (
        <div>
            <main className="projects-page-container">
                <div className='projects-basic-info'>
                    <img src="assets/boradotar.png" alt="Site de adoção de animais" title="BorAdotar"></img>
                    <h1>BorAdotar</h1>
                    <p>2020</p>

                    <div>
                        <span>Tecnologias: </span>
                        <img src='assets/js.png'></img>
                    </div>
                </div>
                <div className='projects-page-description'>
                    <h2>Descrição</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique neque augue, non mollis massa convallis non. Donec imperdiet neque nec lobortis tincidunt. Phasellus lobortis ipsum quis viverra tincidunt. Nunc egestas et dolor id condimentum. Mauris non feugiat magna. Vestibulum malesuada volutpat risus ut tempus. In sagittis ultricies arcu, varius maximus metus ullamcorper faucibus. Aenean iaculis nisl a lectus tempor sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sit amet ullamcorper leo. In finibus ultricies rhoncus. Sed a porta risus, sit amet viverra mi. Praesent pellentesque, tortor eu pellentesque aliquet, arcu elit aliquam odio, a fringilla leo quam ut diam. Morbi et aliquet dui. Proin sed ligula vitae libero venenatis porta non eget lacus.</p>
                    <p>Maecenas consequat tincidunt pretium. Morbi ut enim porttitor, convallis enim sit amet, facilisis nulla. Nunc orci dolor, ornare eu enim quis, lobortis sodales diam. Vestibulum ultrices eros eu purus rutrum, nec congue tortor luctus. Fusce ac ex ut eros ornare ultrices a at mi. Donec eu varius risus. Vivamus vitae posuere justo, vel dignissim nisi. Etiam vestibulum, nibh vel rutrum ultrices, odio mauris iaculis ante, commodo pellentesque nunc ipsum eget turpis. Quisque a justo eu nunc suscipit dignissim sit amet vel ligula. Vestibulum vestibulum lacus quis leo pellentesque, luctus elementum urna consequat. Donec non rutrum velit. Nam nec quam at odio fermentum gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales erat id purus aliquam molestie. Suspendisse sed nunc eros. Nullam id orci ac sem molestie hendrerit dignissim vel velit.</p>
                </div>
            </main>
        </div>
    );
}