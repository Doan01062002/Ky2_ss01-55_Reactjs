import React, { useState } from 'react'
import BT01 from './btsession36/BT01'
import BT02 from './btsession36/BT02'
import BT03 from './btsession36/BT03'
import BT04 from './btsession36/BT04'
import BT05 from './btsession36/BT05'
import BT06 from './btsession36/BT06'
import BT07 from './btsession36/BT07'
import BT08 from './btsession36/BT08'
import BT09 from './btsession36/BT09'
import BT10 from './btsession36/BT10'
import BackToTop from './components/backToTop'
import Memo from './components/Memo'
import UseMemo from './components/UseMemo'
import UseReducer from './components/UseReducer'
import UseReducerAdvanced from './components/UseReducerAdvanced'
// import UseContext from './components/UseContext'
// import UseEffect from './components/UseEffect'
// import UseRef from './components/UseRef'
// import UseContext from './components/UseContext'

export default function App() {

  const [count,setCount] = useState<number>(0)
  return (
    <div>
      {/* 
        trong component app mỗi khi render hoặc re-render lần đầu thì các component con render
        
       */}
      {/* <UseEffect></UseEffect>
      <UseRef></UseRef>
      <UseContext></UseContext> */}
      {/* <UseContext></UseContext> */}
      {/* <BT01></BT01> */}
      {/* <BT02></BT02> */}
      {/* <BT03></BT03> */}
      {/* <BT04></BT04> */}
      {/* <BT05></BT05> */}
      {/* <BT06></BT06> */}
      {/* <BT07></BT07> */}
      {/* <BT08></BT08> */}
      {/* <BT09></BT09> */}
      {/* <BT10></BT10> */}
      <p>giá trị count: {count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
      <Memo count = {count}></Memo>
      <UseMemo></UseMemo>
      <UseReducer></UseReducer>
      <UseReducerAdvanced></UseReducerAdvanced>
      {/* <BackToTop></BackToTop>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet voluptas ipsum voluptatibus a deleniti in laborum, provident assumenda error praesentium, quaerat placeat? Doloremque expedita minus possimus autem nostrum vero eaque.
      Quibusdam nisi non reprehenderit expedita praesentium dolorum quaerat, fugiat aperiam consequuntur earum repellat facere accusamus cumque eos, esse a perspiciatis cum assumenda ducimus. Ea neque repudiandae quaerat dolorem maxime architecto.
      Cumque molestiae veritatis et ipsum quod rem a ex aliquam laborum provident, excepturi fugiat voluptatem natus pariatur eius optio nostrum eaque magnam laboriosam voluptates quae qui. Rem consectetur officia sit!
      Alias dicta quam nam, nesciunt officia veniam autem. Alias voluptas labore amet fugiat aspernatur, quod eum suscipit quam, officia aliquid quidem dignissimos unde quibusdam fuga accusamus quaerat autem aperiam? Quasi.
      Doloremque exercitationem eveniet quidem! Quidem reiciendis accusamus vitae, labore beatae repudiandae consequatur asperiores reprehenderit qui culpa aliquid quia eum doloremque aliquam ipsum, velit quis fugiat delectus libero exercitationem. Quaerat, aliquid?
      Magnam molestias ducimus iure esse? Culpa quasi neque, ab aliquam quibusdam officiis, animi quaerat cumque nihil eum perspiciatis tempora velit facere, dolorum unde dolor vel vitae a nisi aut consectetur.
      Aut voluptatem magni ab alias accusantium nam ipsam inventore, quia quasi ipsum veniam, cupiditate itaque, quisquam explicabo consequatur necessitatibus ea libero dolores commodi tenetur iste odio! Unde blanditiis id animi.
      Iste quae, laudantium nostrum magni, optio excepturi recusandae eveniet laborum rerum vel eligendi libero ipsam. Officiis non quae eaque ut illum eius iure eveniet libero suscipit, pariatur magnam delectus optio.
      Expedita autem non dolores reiciendis ducimus nam beatae alias. Sequi similique ab dolore excepturi accusamus expedita unde architecto fuga exercitationem aspernatur eos dolorum voluptatibus vitae beatae repellendus, possimus quasi laboriosam.
      Necessitatibus deleniti itaque debitis sed corporis distinctio quisquam facilis accusantium porro expedita laudantium cum ullam, iste natus, impedit assumenda officiis molestiae? Quo, ex! Qui distinctio tempora neque assumenda magni at.
      Amet sunt culpa itaque dolore, placeat doloremque, necessitatibus commodi velit, soluta earum alias quam eos similique possimus labore quia ex quae iste totam. Doloribus sint ea itaque suscipit amet iusto?
      Nesciunt accusantium odit tempora, doloribus autem, consectetur quis numquam dignissimos voluptatum necessitatibus quo consequuntur aliquid provident at saepe, voluptas hic? Voluptatibus debitis nisi consequatur et totam omnis maiores, dolorem fuga?
      Minus laborum adipisci, facilis dolores, eius officia eos sit aliquam distinctio dolorem alias ratione neque harum iste rem magnam aut doloremque id, numquam suscipit quasi et facere? Pariatur, recusandae adipisci?
      At itaque assumenda, temporibus libero autem voluptates explicabo amet nisi vel deserunt architecto! In minima itaque blanditiis ut explicabo voluptates, quo eos natus incidunt ab! Soluta sed eveniet sint magnam?
      Dolor autem maxime doloremque sapiente eum explicabo tempora, laboriosam nam beatae quia at omnis repellat voluptatum, quaerat quos doloribus facere accusamus? Reiciendis alias quas voluptatibus error porro qui quod commodi.
      Sunt aliquam maiores non veritatis consectetur officia porro ipsam, dignissimos magnam ex iure soluta maxime, quas dolores fugiat! Velit ut aliquid suscipit dicta eaque labore eius in, nobis molestiae omnis!
      Id quidem assumenda qui, vero cum suscipit molestiae nemo nam saepe earum at et laudantium itaque officia velit sapiente hic modi? Mollitia nesciunt sunt molestiae similique repellat. Voluptas, officia beatae.
      Dignissimos reprehenderit, tempore porro repellendus totam quasi corrupti quod architecto deleniti iusto corporis magni culpa, aliquam, quam voluptates soluta fuga! Dolorem deleniti illum corporis qui ratione reiciendis amet neque ad.
      Minima repellat hic, non numquam, fugit saepe autem voluptates minus illum, reprehenderit eius voluptatum laudantium obcaecati commodi vero quisquam enim eum explicabo porro pariatur nihil quod? Alias vitae minima dolore!
      Quibusdam repellendus perspiciatis autem deserunt mollitia. Soluta in neque nesciunt tempora consequatur, rerum minima natus quos quis aut exercitationem rem numquam sequi. Odio quas optio non expedita quam obcaecati officiis.
      Sequi aspernatur magnam placeat laboriosam voluptates, cumque, ducimus ex mollitia sed quia corporis quasi, fugiat provident. Quo aut quis officiis modi officia veritatis quaerat voluptas pariatur, aperiam minima ipsa nulla.
      Vero nihil, consequuntur qui labore ab saepe illum odio deleniti veniam, quaerat doloribus pariatur voluptatem animi impedit unde numquam eum, iure fuga quisquam? In, voluptatibus voluptatem dolorem nostrum suscipit doloribus!
      Eligendi sequi deleniti fugiat optio quibusdam praesentium explicabo vitae, perferendis tenetur excepturi dicta. Doloribus nostrum delectus tenetur alias qui dolore? Sapiente laborum necessitatibus repellat accusamus at maxime asperiores inventore! Nobis.
      Deserunt voluptatum repellendus, assumenda reprehenderit temporibus corporis nisi accusamus officia quas, nostrum quaerat maiores veritatis ipsam ducimus mollitia. Dicta id quidem itaque a obcaecati sequi distinctio similique unde dolores soluta!
      Voluptatem accusantium molestiae amet veniam, id sit quaerat asperiores praesentium aliquid corporis. Libero laudantium possimus sed voluptatibus assumenda tempore reiciendis eligendi, blanditiis delectus adipisci dolor minima similique neque distinctio tenetur?
      Accusamus minima architecto dolore distinctio id mollitia, voluptate facilis quibusdam excepturi incidunt asperiores. Eius rem atque aperiam similique. Magnam enim repellendus earum, magni quibusdam repellat vero. Qui vero eaque unde!
      Dolorem iure ut facilis quae officiis nisi, id dolorum quis sit quas esse explicabo porro voluptate recusandae quibusdam illum impedit sint eaque laboriosam sed doloremque alias ipsum laborum? Earum, repellendus.
      Fuga necessitatibus quibusdam vero voluptatum officiis cupiditate delectus nemo, facere, quo, doloremque repudiandae dignissimos aliquam dolor eum praesentium quia voluptates nihil quas consectetur? Explicabo eius cupiditate ducimus hic ratione a.
      Tempora nisi deleniti facilis veniam enim similique tempore doloribus distinctio! Vitae laboriosam sed amet fugit quae fuga aperiam itaque, pariatur iure corrupti, dolores, debitis temporibus numquam accusamus hic autem repudiandae.
      Tempora maiores dolor provident itaque porro, architecto molestiae ipsum vel exercitationem nihil impedit quam voluptates officiis illo beatae veniam recusandae nobis consequatur nemo sint! Illum dolor vel voluptatem laboriosam harum.
      Tempore, quia quae unde eos sint cumque reprehenderit, veniam eveniet natus numquam ullam suscipit accusantium ipsam mollitia aperiam ut laboriosam voluptate dolorem ipsa blanditiis. Aperiam velit perspiciatis libero eaque molestiae!
      Est eveniet quidem temporibus tempore similique labore id, blanditiis odio enim veniam eos deserunt adipisci cum ducimus doloribus, itaque error nam maxime illum aliquid tenetur odit quibusdam maiores. Voluptatem, dolor!
      Iure fuga perspiciatis tempora. Accusantium molestias obcaecati ex veritatis, expedita omnis vero porro nam velit iste voluptatum placeat eius. Distinctio harum aliquid rem? Corporis illum vitae rerum voluptatibus quo nihil.
      Recusandae culpa facilis voluptates sequi dolor, illum qui voluptate cumque adipisci accusamus officiis at laboriosam fugiat veniam quae? Corporis eos necessitatibus quos accusantium cupiditate expedita ipsum ipsa at, voluptas consequatur.
      Ab ipsum maxime accusamus distinctio cum! Ipsum, aspernatur sapiente maxime nulla incidunt autem totam assumenda modi nobis soluta, fugit esse perferendis quae, praesentium unde. Maxime, quae amet? Error, repudiandae aliquam?
      Saepe exercitationem numquam inventore laudantium iure assumenda voluptatibus minus consequuntur amet, fuga atque quis vitae quaerat vero. Quisquam soluta facere, tempora maiores deserunt eius reprehenderit. A minus vero atque adipisci!
      Iusto nam, ducimus libero ab, dolorem veritatis porro magni corporis rerum nobis eum? Nobis itaque neque sequi provident ex autem. Animi suscipit eius eos delectus incidunt architecto magni veniam sunt.
      Saepe necessitatibus, optio natus repellendus aut molestias veniam delectus totam mollitia fuga inventore doloremque minima distinctio ullam similique aspernatur quas excepturi aperiam eum vitae debitis voluptate. Exercitationem rem magnam vero!
      Nostrum atque repellendus earum quibusdam maxime odio cum obcaecati neque delectus dolor. Consectetur labore tempore aliquam earum accusantium? Possimus fugiat aliquam minima ea magni voluptate explicabo dignissimos, reiciendis assumenda quaerat.
      Quos nisi corporis magnam magni mollitia ex, commodi voluptate minus, praesentium exercitationem excepturi expedita saepe in aut ab quam molestiae, facilis cupiditate. Reprehenderit soluta quas distinctio totam deleniti possimus non?
      Aliquam, reprehenderit modi! Odio saepe eaque velit laboriosam vero, cupiditate iure provident vel error quis reprehenderit inventore repudiandae recusandae omnis? Odio ipsa nulla exercitationem, sit harum tempora tenetur ipsam maiores!
      Dolor quo aliquid ipsa officiis, error enim quasi sapiente totam exercitationem quidem id ex veniam delectus, commodi odio minima corrupti nisi impedit, aliquam harum. Eaque vero ut optio velit assumenda.
      Omnis ducimus suscipit dolore ratione at qui! Eum, dolor est in explicabo tenetur nemo adipisci rerum quae. A, dolorum ex! Omnis pariatur quaerat quis nemo atque ut labore mollitia numquam?
      Iste quae quasi officiis dolorem aut maiores explicabo ad itaque distinctio voluptatibus eaque facere animi nemo sint provident atque amet commodi, perferendis deserunt consequuntur repellat quibusdam culpa! Voluptates, dolores maiores.
      Cumque, tempora aliquam est dolor quis, nulla, ea ab minus vitae hic odio deleniti. Tempore odit expedita eligendi. Sunt sint quae quod accusantium assumenda iste ut numquam atque sapiente veritatis?
      Quidem odit cum dolores debitis, doloribus velit in, nihil reprehenderit earum ex sit eligendi ab voluptatem vero minima molestias assumenda quibusdam nulla porro tenetur quasi eos accusamus aliquam. Incidunt, quaerat.
      Quam totam molestias magnam nulla quisquam sint eveniet deserunt expedita rem. Ea optio earum saepe quo minus, cum recusandae hic ut odio neque quaerat! Nisi, eum! Nemo sit tenetur veniam.
      Consequatur aut hic ut! Voluptates necessitatibus cumque, autem, sequi unde enim praesentium, nemo laboriosam saepe quod labore quisquam officia exercitationem. Id est vero eaque consequuntur praesentium enim architecto ut minus.
      Eius quas, rem dolore repellendus nihil natus quasi dolores consequatur, assumenda laboriosam perspiciatis vero quisquam explicabo culpa laborum impedit corrupti, corporis cumque soluta quibusdam delectus pariatur officiis. Vitae, quis commodi?
      Est enim autem saepe libero dicta deserunt pariatur quam alias rerum, praesentium exercitationem possimus expedita explicabo animi tenetur eligendi modi necessitatibus nulla voluptate, quis, mollitia optio? Exercitationem ea eligendi eum?</p> */}
    </div>
  )
}
