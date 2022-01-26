Vue.component('AnimationComp', {
    //   props: ['color'],
    data() {
        return {
            texts: [
                {
                    id: 1,
                    text: 'Бывают случаи, что какой-либо объект загружается слишком долго, или просто дольше основного контента. В таких случаях анимация станет отличным способом на время отвлечь внимание пользователя. К тому же, она создаст ощущение, что загрузка происходит в разы быстрее, чем на самом деле, особенно если пользователю нравится то, что он видит. Это может быть как что-то нейтральное, так нечто яркое, запоминающееся. Примером такой анимации может быть прелоадер, та самая анимация, которую вы видите, открывая наш сайт.'
                },
                {
                    id: 2,
                    text: 'Еще одна функция анимационных переходов - навигация по сайту. Такой вид анимации поможет пользователю сориентироваться на сайте, показать возможные дальнейшие действия. Примером такого типа анимации является анимация при наведении курсора на интерактивный элемент. Это очень поможет пользователю если он не уверен в назначении элемента.'
                },
                {
                    id: 3,
                    text: 'Безусловно, анимация - это креативное решение, которое запоминается пользователями и оставит определенное представление о бренде. Такая анимация может повысить узнаваемость и выглядеть выигрышно в сравнении с конкурентами. Самое главное - не злоупотреблять креативностью и такого рода анимацией, чтобы не слишком отвлекать пользователя от продукта.'
                },
                {
                    id: 4,
                    text: 'Также один из наиболее популярных методов использования анимационных переходов - переходы при изменении страницы. Они используются, чтобы показать, что открылся новый раздел. Это очень сильно облегчает для пользователя понимание сайта, и позволяет сразу понять, где он сейчас находится.'
                },
                {
                    id: 5,
                    text: 'Анимация и анимационные переходы чаще всего используются для привлечения внимания к отдельным составляющим страницы. Это может быть призыв к действию (баннер со специальным предложением), появившаяся кнопка, ставшая доступной и так далее. Существует много видов подобной анимации, и она практически всегда смотрится оригинально, удобно и уместно.'
                }
            ],
            showBlock: false,
            showBlock1: false,
            showBlock2: false,
            showBlock3: false,
            showBlock4: false,
            currentText: {},
            text1: {
                id: 1,
                text: 'Бывают случаи, что какой-либо объект загружается слишком долго, или просто дольше основного контента. В таких случаях анимация станет отличным способом на время отвлечь внимание пользователя. К тому же, она создаст ощущение, что загрузка происходит в разы быстрее, чем на самом деле, особенно если пользователю нравится то, что он видит. Это может быть как что-то нейтральное, так нечто яркое, запоминающееся. Примером такой анимации может быть прелоадер, та самая анимация, которую вы видите, открывая наш сайт.'
            },
            text2: {
                id: 2,
                text: 'Еще одна функция анимационных переходов - навигация по сайту. Такой вид анимации поможет пользователю сориентироваться на сайте, показать возможные дальнейшие действия. Примером такого типа анимации является анимация при наведении курсора на интерактивный элемент. Это очень поможет пользователю если он не уверен в назначении элемента.'
            },
            text3: {
                id: 3,
                text: 'Безусловно, анимация - это креативное решение, которое запоминается пользователями и оставит определенное представление о бренде. Такая анимация может повысить узнаваемость и выглядеть выигрышно в сравнении с конкурентами. Самое главное - не злоупотреблять креативностью и такого рода анимацией, чтобы не слишком отвлекать пользователя от продукта.'
            },
            text4: {
                id: 4,
                text: 'Также один из наиболее популярных методов использования анимационных переходов - переходы при изменении страницы. Они используются, чтобы показать, что открылся новый раздел. Это очень сильно облегчает для пользователя понимание сайта, и позволяет сразу понять, где он сейчас находится.'
            },
            text5: {
                id: 5,
                text: 'Анимация и анимационные переходы чаще всего используются для привлечения внимания к отдельным составляющим страницы. Это может быть призыв к действию (баннер со специальным предложением), появившаяся кнопка, ставшая доступной и так далее. Существует много видов подобной анимации, и она практически всегда смотрится оригинально, удобно и уместно.'
            }
        }
    },
    methods: {
        openText(num) {
            const findedItem = this.texts.find((item) => item.id === num);
            this.currentText = findedItem
            this.showBlock = true;
            /*  if (this.showBlock === true) {
                  this.showBlock = false
              }
              else {
                  const findedItem = this.texts.find((item) => item.id === num);
                  this.currentText = findedItem
                  this.showBlock = true;
              }
  */

        },
        closeText() {
            this.showBlock = false
        },

        openText1() {
            if (this.showBlock1 === true) {
                this.showBlock1 = false
            }
            else {
                this.showBlock1 = true;
            }
        },
        closeText1() {
            this.showBlock1 = false
        },

        openText2() {
            if (this.showBlock2 === true) {
                this.showBlock2 = false
            }
            else {

                this.showBlock2 = true;
            }
        },
        closeText2() {
            this.showBlock2 = false
        },

        openText3() {
            if (this.showBlock3 === true) {
                this.showBlock3 = false
            }
            else {

                this.showBlock3 = true;
            }
        },
        closeText3() {
            this.showBlock3 = false
        },

        openText4() {
            if (this.showBlock4 === true) {
                this.showBlock4 = false
            }
            else {

                this.showBlock4 = true;
            }
        },
        closeText4() {
            this.showBlock4 = false
        },
    },

    template: `
    <div>
    <div class="ways"> 
    <div class="ways-wrapper"> 
    <div class="line-ways">

           
            <div class="way">
                <div class="way-container">
                        <img class="way-img" src="../images/way1.jpg" alt="">
                        <div class="way-outline">
                            
                            <div class="way-description">Анимация при загрузки данных</div>
                            <div class="gradient-button"  @click="openText(1)">Подробнее</div>
                            <div class="gradient-button-adapt"  @click="openText1()">Подробнее</div>
                        </div>
                        
                </div>
                
                <p class="way-about">Бывают случаи, что какой-либо объект загружается слишком долго, или просто дольше основного контента. В таких случаях анимация станет отличным способом на время отвлечь внимание пользователя. К тому же, она создаст ощущение, что загрузка происходит в разы быстрее, чем на самом деле, особенно если пользователю нравится то, что он видит. Это может быть как что-то нейтральное, так нечто яркое, запоминающееся. Примером такой анимации может быть прелоадер, та самая анимация, которую вы видите, открывая наш сайт.</p>        
                       
                    </div>

                    <div class="way">
                        <div class="way-container">
                                <img class="way-img" src="../images/way2.jpg"  alt="">
                                <div class="way-outline">
                                    
                                    <div class="way-description">Навигация</div>
                                    <div class="gradient-button"  @click="openText(2)">Подробнее</div>
                                    <div class="gradient-button-adapt"  @click="openText2()">Подробнее</div>
                                </div>
                               
                        </div>
                        <p class="way-about">Еще одна функция анимационных переходов - навигация по сайту. Такой вид анимации поможет пользователю сориентироваться на сайте, показать возможные дальнейшие действия. Примером такого типа анимации является анимация при наведении курсора на интерактивный элемент. Это очень поможет пользователю если он не уверен в назначении элемента.</p>        
                               
                    </div>
            

        </div>
        <div v-if='showBlock1' class='p_text_style_for_lines'>
        <animation-text :currentText='text1' @closeCurrentText='closeText1'/> 
    </div> 
    <div v-if='showBlock2' class='p_text_style_for_lines'>
        <animation-text :currentText='text2' @closeCurrentText='closeText2'/> 
    </div> 
        
        <div class="line-ways">



            <div class="way">
                <div class="way-container" >
                        <img class="way-img" src="../images/way3.jpg"  alt="">
                        <div class="way-outline">
                            <div class="way-description">Оригинальность</div>
                             <div class="gradient-button"  @click="openText(3)">Подробнее</div>
                             <div class="gradient-button-adapt"  @click="openText3()">Подробнее</div>
                        </div>
                        
                </div>
                <p class="way-about">Безусловно, анимация - это креативное решение, которое запоминается пользователями и оставит определенное представление о бренде. Такая анимация может повысить узнаваемость и выглядеть выигрышно в сравнении с конкурентами. Самое главное - не злоупотреблять креативностью и такого рода анимацией, чтобы не слишком отвлекать пользователя от продукта.</p>        
                       
                    </div>

                    <div class="way">
                        <div class="way-container">
                                <img class="way-img" src="../images/way4.jpg"  alt="">
                                <div class="way-outline">
                                   
                                    <div class="way-description">Перемена экранов</div>
                    <div class="gradient-button"  @click="openText(4)">Подробнее</div>
                    <div class="gradient-button-adapt"  @click="openText4()">Подробнее</div>
                                </div>
                                
                        </div>
                        <p class="way-about">Также один из наиболее популярных методов использования анимационных переходов - переходы при изменении страницы. Они используются, чтобы показать, что открылся новый раздел. Это очень сильно облегчает для пользователя понимание сайта, и позволяет сразу понять, где он сейчас находится.</p>        
                               
                            </div>
        

             
               
        </div>
        <div v-if='showBlock3' class='p_text_style_for_lines'>
        <animation-text :currentText='text3' @closeCurrentText='closeText3'/> 
    </div> 
    <div v-if='showBlock4' class='p_text_style_for_lines'>
        <animation-text :currentText='text4' @closeCurrentText='closeText4'/> 
    </div> 
        <div class="line-ways">

<div class="way">
    <div class="way-container way-last ">
            <img class="way-img img-last" src="../images/way5.jpg"  alt="">
            <div class="way-outline way-outline-last">
                <div class="way-description">Привлечение внимания к элементам</div>
                <div class="gradient-button"  @click="openText(5)">Подробнее</div>
            </div>
           
           
    </div>
    <p class="p-last">Анимация и анимационные переходы чаще всего используются для привлечения внимания к отдельным составляющим страницы. Это может быть призыв к действию (баннер со специальным предложением), появившаяся кнопка, ставшая доступной и так далее. Существует много видов подобной анимации, и она практически всегда смотрится оригинально, удобно и уместно.</p>        
           
        </div>
        </div>
</div>
 <div v-if='showBlock' class='p_text_style'>
                <animation-text :currentText='currentText' @closeCurrentText='closeText'/> 
            </div> 

</div>
          
        
            
        
    </div>
    `
});

Vue.component('AnimationText', {
    props: ['currentText'],
    template: `
    <div>
    <button class="close-animaion-btn" @click="$emit('closeCurrentText')">Закрыть</button>
<p> {{this.currentText.text}}</p>

    </div>
    
    `
});

