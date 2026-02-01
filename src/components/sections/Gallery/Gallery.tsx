import { Container } from '../../layout/Container';
import { GalleryTitle } from './GalleryTitle';
import { GallerySubtitle } from './GallerySubtitle';
import { GalleryGrid } from './GalleryGrid';

export function Gallery() {
  return (
    <section className='bg-dark'>
      <Container>
        {/* Cabeçalho centralizado */}
        <div className='flex flex-col items-center text-center pt-[160px] pb-[80px] gap-8'>
          <GalleryTitle />
          <GallerySubtitle />
        </div>

        {/* Grid sem centralização forçada */}
        <GalleryGrid />
      </Container>
    </section>
  );
}