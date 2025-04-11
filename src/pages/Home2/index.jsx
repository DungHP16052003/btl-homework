import Accordion from "@/components/Accordion/Accordion";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Tabs, { Tab } from "@/components/Tabs";

function Home2() {
  // const ulElement = React.createElement(
  //   "ul",
  //   {
  //     className: "course-list",
  //   },
  //   React.createElement(
  //     "li",
  //     {
  //       className: "course-item",
  //     },
  //     React.createElement("a", { href: "/courses/1" }, "HTML, CSS")
  //   ),
  //   React.createElement(
  //     "li",
  //     {
  //       className: "course-item"
  //     },
  //     React.createElement("a", { href: "/courses/2" }, "php, js")
  //   ),
  //   React.createElement(
  //     "li",
  //     {
  //       className: "course-item",
  //     },
  //     React.createElement("a", { href: "/courses/3" }, "HTML, CSS")
  //   )
  // )
  return (
    <div>
      <Tabs defaultIndex={0} onChange={(index) => console.log(index)}>
        <Tab title="Tab1">Content of tab1</Tab>
        <Tab title="Tab2">Content of tab2</Tab>
        <Tab title="Tab3">Content of tab3</Tab>
        <Tab title="Tab4">Content of tab4</Tab>
        <Tab title="Tab5">Content of tab5</Tab>
        <Tab title="Tab6">Content of tab6</Tab>
      </Tabs>
      <Accordion
        defaultIndex={0}
        onChange={(index) => console.log(index)}
        collapseOthers={true} // Chỉ mở 1 mục cùng lúc
      >
        <AccordionItem header="Accordion 1">
          Nội dung của Accordion 1
        </AccordionItem>
        <AccordionItem header="Accordion 2">
          Nội dung của Accordion 2
        </AccordionItem>
        <AccordionItem header="Accordion 3">
          Nội dung của Accordion 3
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default Home2;
