import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                    <img src="https://avatars3.githubusercontent.com/u/18725794?s=460&u=fd25fc954932569ca6d380fc0e9c622e5098764f&v=4" alt="Max"/>
                    <div>
                        <strong>Max Willian</strong>
                        <span>Programação</span>
                    </div>
            </header>

            <p>
                sddsdfasfsadg saffdasf sdfghfdhf  asijasias.
                <br/><br/>
                adoawjoid sfunhiaeuh uya uhiahukdauho ha uagyuagy qgusuqt ahiusdhuadh okakedpak ygqgyq aysyas.
            </p>

            <footer>
                <p>
                    Preco/hora
                    <strong>R$ 20</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Zap Zap"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;