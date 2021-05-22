import './OQueFazemos.css';
import whoWeAreImage from '../../assets/images/recivingBlood.png'

export default function OQueFazemos() {
    return (
        <>
        <div class="container-fluid">
            <div className="ob-whatWeDo_container">
                <h2 className="ob-whatWeDo_title">o que fazemos:</h2>
                <div class="row">
                    <div className="col-md-9">
                        <div className="p-5 pt-5 ob-whatWeDo_text">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est mi. Vestibulum in consectetur velit, non pretium nibh. Aliquam non erat et ante accumsan interdum. Proin at augue quis eros consequat vulputate mollis ut ex. Praesent a facilisis metus. Pellentesque eleifend eros vitae augue facilisis, et consequat nisl molestie. Donec id metus turpis. Integer augue nulla, euismod id dolor sit amet, viverra pharetra arcu. Proin facilisis orci eget arcu fringilla, a consectetur odio pellentesque. Mauris ullamcorper arcu ut interdum egestas.
                            </p>
                            <p>
                            Nullam accumsan eros risus, ut dignissim leo laoreet id. Morbi finibus aliquam lorem quis imperdiet. Donec in tortor sed orci porta elementum. Vestibulum scelerisque, nisi sed aliquet auctor, enim arcu scelerisque orci, sed pharetra tortor nisi at ipsum. Mauris interdum fringilla nisi, eget feugiat lorem pellentesque nec. Ut vulputate commodo est sit amet scelerisque. Maecenas semper est id dolor tempus pulvinar. Donec ornare quis dolor sit amet aliquam. Quisque luctus neque quis lacus mollis vehicula. Mauris dui lacus, vestibulum vitae lectus at, mattis semper sem. Nulla facilisis posuere elit ac vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <img className="ob-whatWeDo_image" src={whoWeAreImage} alt="pessoa doando sangue"  />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}