import LectureImg1 from '../../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../../assets/images/lecture-3.jpg';
import LectureImg4 from '../../../assets/images/lecture-4.jpg';
import LectureImg5 from '../../../assets/images/lecture-5.jpg';
import LectureImg6 from '../../../assets/images/lecture-6.jpg';
import LectureImg7 from '../../../assets/images/lecture-7.jpg';
import LectureImg8 from "../../../assets/images/lecture-8.jpg";
 
const coursesMock = [
    {
        id: 1,
        imgSrc: LectureImg1,
        imgAlt: 'Introduction',
        title: '1. Introduction',
        subtitle: '60 Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 2,
        imgSrc: LectureImg2,
        imgAlt: 'HTML & CSS',
        title: '2. HTML & CSS',
        subtitle: '120+ Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 3,
        imgSrc: LectureImg3,
        imgAlt: 'Version Control System',
        title: '3. Version Control System',
        subtitle: '120+ Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 4,
        imgSrc: LectureImg4,
        imgAlt: 'Advanced CSS',
        title: '4. Advanced CSS',
        subtitle: '120+ Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 5,
        imgSrc: LectureImg5,
        imgAlt: 'JavaScript Basics',
        title: '5. JavaScript Basics',
        subtitle: '60 Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 6,
        imgSrc: LectureImg6,
        imgAlt: 'Advanced JavaScript',
        title: '6. Advanced JavaScript',
        subtitle: '120+ Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 7,
        imgSrc: LectureImg7,
        imgAlt: 'Intro to React',
        title: '7. Intro to React',
        subtitle: '120+ Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    },
    {
        id: 8,
        imgSrc: LectureImg8,
        imgAlt: 'React events & conditionals',
        title: '8. React events & conditionals',
        subtitle: '90 Minutes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec. Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi. Sed sed pulvinar risus. Nulla facilisi. Integer vel tempor felis, non viverra arcu. Pellentesque sed fringilla justo, a volutpat nisl. Nulla facilisi. Ut et hendrerit eros, eget dapibus leo. Curabitur at condimentum libero, vehicula porta mauris. Quisque volutpat ut nisi ut porta. Proin vestibulum auctor justo vel blandit. Curabitur sit amet purus nec dolor lacinia placerat ut id est. Morbi eget auctor diam. Pellentesque viverra mi eget tellus sollicitudin elementum. Vestibulum molestie purus sit amet nisl volutpat vulputate. Nullam tempor sit amet nibh eu accumsan. Morbi a vulputate massa, a tristique eros. Sed et nisl vitae metus lacinia luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis semper dui sed nulla luctus cursus. Donec ac bibendum urna. Cras vitae dolor in dui efficitur elementum. Curabitur varius orci ac nibh molestie, bibendum bibendum velit accumsan. Proin dolor ex, sagittis sodales erat id, posuere cursus nibh. Donec at blandit libero. Aenean non dui vitae enim tincidunt imperdiet in eu dolor.'
    }
];

 export default coursesMock;