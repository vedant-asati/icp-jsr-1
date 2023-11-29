// actor Dkeeper {
//   public query func greet(name : Text) : async Text {
//     return "Hello, " # name # "!";
//   };
// };
import List "mo:base/List";
import Buffer "mo:base/Buffer";
import d "mo:base/Debug";
import Nat "mo:base/Nat";

actor DKeeper {
  public type Note = {
  title: Text;
  content: Text;
  };
  var notes: List.List<Note> = List.nil<Note>();

  public func createNote (titleText: Text, contentText: Text) {
  let newNote: Note = {
  title = titleText;
  content = contentText;
  };
  notes:= List.push(newNote, notes);
  d.print(debug_show(notes));
};
 public query func returnNotes() : async [Note] {
    List.toArray(notes);
  };
 public func deleteNotes(index:Nat) : async [Note]  {
    let notes1 = List.take(notes, index);
    let notes2 = List.drop(notes, index+1);
    notes:= List.append(notes1,notes2);
    return List.toArray(notes);
  };


}