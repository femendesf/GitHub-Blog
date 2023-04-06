export function App(){
  return(
   <main className="w-full flex flex-col items-center justify-center">
      
      <header className="w-full flex items-center just">
        <img src="src\assets\Cover.png" className="w-full max-h-[296px]"/>
      </header>
        <img src="src\assets\logo.svg" className="mt-[-232px] mb-8"/>

      <div className="flex w-[864px] gap-8 bg-base-profile py-8 px-10 rounded-lg mb-[72px] ">

        <img src="src\assets\avatar.svg" />

        <div className="flex flex-col gap-8">
          
          <div>
            <h1>Cameron Williamson</h1>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </div>

           <div className="text-base-subtitle flex gap-6">
            <span>cameronwll</span>
            <span>Rocketseat</span>
            <span>32 seguidores</span>
          </div>
        </div>

      </div>
      
      <div>
        <input type="text" className="bg-black"/>
      </div>
     ,

      <div className="grid grid-cols-2 gap-8">

        <div className="w-[416px] h-[260px] p-8 bg-base-post">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl w-[283px]">JavaScript data types and data structures</h1>
            <span className="text-sm text-base-span h-[22px] leading-loose">Há 1 dia</span>
          </div>
          
          <p className="h-[112px] overflow-hidden leading-relaxed">
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
          

        </div>
      
        <div className="w-[416px] h-[260px] p-8 bg-base-post">
          <h1>JavaScript data types and data structures</h1>
          <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
        </div>

       
      </div>
      
   </main>
    
  )
}
