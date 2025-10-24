import {
	FileLoader,
	Texture,
	Loader
} from 'three';

class TextureLoader extends Loader {

	constructor( manager ) {

		super( manager );

	}

	load( url, onLoad, onProgress, onError ) {

		const texture = new Texture();

		const loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setResponseType( 'arraybuffer' );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );

		loader.load( url, function ( buffer ) {

			const blob = new Blob( [ buffer ] );
			const url = URL.createObjectURL( blob );

			const image = new Image();
			image.addEventListener( 'load', function () {

				texture.image = image;
				texture.needsUpdate = true;

				if ( onLoad !== undefined ) {

					onLoad( texture );

				}

				URL.revokeObjectURL( url );

			}, false );

			image.src = url;

		}, onProgress, onError );

		return texture;

	}

}

export { TextureLoader };