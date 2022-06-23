
  const [itemLanguage, setItemLanguage] = useState("show");
  const [inputLanguage, setInputLanguage] = useState("hide");


      <div className="item">
            <div className={itemLanguage}>
            <div className={"item_detils "+Active}>
                <span>اللغه</span>
                <button className="btn"
                onClick={() => ShowPendingads(setItemLanguage, setInputLanguage)}>تعديل</button>
            </div>
            </div>


        <div className={inputLanguage}>
            <div className="item_inputimg">
            <InputLanguageset  HidePendingads={HidePendingads} setItemLanguage={setItemLanguage} setInputLanguage={setInputLanguage} />
            </div>
        </div>


    </div>



export function InputLanguageset(props) {
    const { HidePendingads, setItemLanguage, setInputLanguage } = props;
    return (
      <div className="input_contener">
        <div className="item_detils">
            <span>اللغه</span>
          <button
            className="btn"
            onClick={() => HidePendingads(setItemLanguage, setInputLanguage)}
          >
            إلغاء
          </button>
        </div>
  
        <div className="input-item">
          <div className="input">
          <input type="text" />
          </div>
          
        </div>
      </div>
    );
  }