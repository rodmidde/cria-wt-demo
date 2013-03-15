/**
 * User: mdkr
 * Date: 3/2/13
 */
$(function () {
    describe('The photoviewer using jQuery', function () {
        beforeEach(function () {
            $('body').append($('<div />', { 'id': 'container'}));
        });

        afterEach(function () {
            $('.container').remove();
        });


        it('should have zero images when the addImagesToContainer function is called without arguments', function () {
            tryAddImagesToContainerJQ();
            expect(document.images.length).toBe(0);
        });

        it('should have one image when the addImagesToContainer function is called with an array of length 1', function () {
            tryAddImagesToContainerJQ([
                {url: "somePicture.jpg"}
            ]);
            expect(document.images.length).toBe(1);
        });
    });
});
