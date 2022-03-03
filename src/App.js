import logo from './logo.svg';
import './App.css';

// TODO
// Data model for evaporating ink...
// REQUIREMENTS: 
// - deterministic (same input sequence yields same output sequence)
// - entire view must fit in working memory & visual field ("one sentence views")
// - explorable 
// - navigable (user can find desired content in minimal clicks)
//  todo - context?
// Each pane contains a string
// No explicit links; highlighting text is like searching
//                (highlight = query for next pane)
//              Each pane has a string to display (VALUE)
//             & keywords which trigger it (KEYS)
//            SIMPLIFY: every WORD in VALUE is a KEY-WORD
//            what's a WORD? whitespace separated chunk? ok
//
// Data model for evaporating ink: 
//  Collection of VALUEs = SENTENCEs
//    a SENTENCE is a sequence of WORDs
//      WORDs in a sentence act as KEYs (KEY-WORDs)
//
//  USER places attention on subsequence of WORDs
//    selected WORDS act as query (key)



// WB out-links?
// some queries should open a new page!


// NODE
// a NODE has KEYWORD(s)
// a SENTENCE is a NODE
// a WEBPAGE is a NODE

// a NODE has .reveal(WINDOW)
//    SENTENCE.reveal(WINDOW) displays SENTENCE in WINDOW
//    WEBPAGE.reveal(WINDOW) opens WEBPAGE in a new tab

// WEB - a NODE collection & logic 4 User Interaction
// a WEB has .query(KEYWORD(s))
// ...


// Composition rather than inheritance...
//    Different NODE types 

KEYWORDS = "language evolution real-time \
  space time persistence storage ephemeral\
  attention control decentralized working-memory\
  scarcity resource allocation synchronization\
  tension release global local consistent information\
  free cost friction";
CONTENT = [
  Sentence("evolution", "")
  ""
]


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
