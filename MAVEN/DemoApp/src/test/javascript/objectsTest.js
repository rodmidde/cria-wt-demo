/**
 * User: mdkr
 * Date: 3/2/13
 */

describe('The object "Rody', function () {
    it('had a name called "Rody"', function(){
       expect(rody.getName()).toEqual("Rody");
    });

    it('has no children before marriage', function () {
        expect(rody.hasChildren()).toEqual(false);
    });

    it('has two children after making love to wife', function () {
        var wife = {
            name:"Janneke",
            children:[],
            makeLoveTo:function (husband, nameOfKid) {
                husband.children.push({name:nameOfKid});
                this.children.push({name:nameOfKid});
            },
            hasChildren:function () {
                return this.children.length > 0;
            }
        }

        wife.makeLoveTo(rody, "Anne");
        wife.makeLoveTo(rody, "Teun");

        expect(rody.hasChildren()).toEqual(true);
        expect(wife.hasChildren()).toEqual(true);
    });
});