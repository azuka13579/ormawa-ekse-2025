<?php

namespace Database\Seeders;

use App\Models\Div;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DivisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('divs')->insert([
            [
                'divisi' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'deskripsi' => 'merupakan sebuah wadah yang berpartisipasi langsung dalam penyelesaian masalah dan tantangan yang dihadapi KM PKU dengan isu kesehatan mental, finansial, dan akademik sebagai prioritas utama. Adkesmah hadir untuk memberi solusi yang berpihak pada kesejahteraan mahasiswa dengan visi yang didasari oleh rasa sayang, cinta kasih, dan integritas. Departemen ini berkontribusi penuh dalam mengadvokasikan segala kebutuhan KM PKU melalui dukungan baik secara langsung maupun tidak langsung untuk memfasilitasi KM PKU demi mewujudkan lingkungan kampus yang sejahtera.',
                'image_path' => 'images/logo/adkesmah.png',
                'timeline_path' => 'images/timeline/adkesmah.png'
            ],
            [
                'divisi' => 'Departemen Sosial dan Lingkungan Hidup',
                'deskripsi' => 'adalah wadah yang berfokus pada pengembangan kepedulian sosial dan pelestarian lingkungan hidup. Departemen ini bertujuan untuk meningkatkan kesadaran dan partisipasi mahasiswa dalam menghadapi tantangan sosial dan lingkungan melalui aksi nyata dan kolaborasi. SLH juga berperan sebagai motor penggerak perubahan positif yang mengintegrasikan nilai-nilai keberlanjutan, inklusivitas, dan inovasi demi menciptakan dampak berkelanjutan bagi komunitas dan lingkungan.',
                'image_path' => 'images/logo/slh.png',
                'timeline_path' => 'images/timeline/slh.png'
            ],
            [
                'divisi' => 'Biro Internal',
                'deskripsi' => 'adalah rumah bagi seluruh nahkoda, kapten, dan awak kapal Ormawa Eksekutif PKU IPB 2024/2025. Biro Internal memiliki tupoksi sebagai mesin yang menggerakkan, menjaga keselarasan, serta memastikan konsistensi dalam Internal Ormawa Eksekutif PKU IPB 2024/2025. Biro Internal memegang peran krusial dalam memastikan kinerja dapat dijalankan secara maksimal melalui ikatan yang dibangun di dalamnya.',
                'image_path' => 'images/logo/internal.png',
                'timeline_path' => 'images/timeline/internal.png'
            ],
            [
                'divisi' => 'Departemen Seni dan Budaya',
                'deskripsi' => ' berperan sebagai pusat kreativitas, pelestarian budaya,
dan penggerak semangat seni bagi KM PKU. Melalui program inovatif dan edukatif, 
departemen ini mendukung pengembangan diri, meningkatkan kesadaran akan 
kekayaan budaya Nusantara, serta menyediakan ruang bagi KM PKU untuk',
                'image_path' => 'images/logo/senbud.png',
                'timeline_path' => 'images/timeline/senbud.png'
            ],
            [
                'divisi' => 'Departemen Akademik Prestasi',
                'deskripsi' => 'merupakan sebuah wadah yang memiliki tujuan untuk memenuhi kebutuhan dan membantu Mahasiswa PKU IPB agar dapat berkembang di bidang akademik dan prestasi. Departemen Akademik Prestasi hadir untuk membantu dalam peningkatan prestasi akademik maupun non akademik KM PKU IPB serta menjadi wadah informasi akademik dan perlombaan guna mencetak KM PKU IPB yang berprestasi.',

                'image_path' => 'images/logo/akpres.png',
                'timeline_path' => 'images/timeline/akpres.png'
            ],
            [
                'divisi' => 'Biro Media Branding',
                'deskripsi' => 'adalah bagian dari Ormawa Eksekutif PKU IPB yang berperan dalam membangun dan mengelola citra organisasi melalui desain, multimedia, dan publikasi. Biro ini terbagi menjadi dua divisi, yaitu Design dan Multimedia. Divisi Design bertanggung jawab atas pembuatan materi visual seperti poster, infografis, dan elemen grafis lainnya, sementara divisi Multimedia fokus pada dokumentasi foto, video, serta produksi konten kreatif untuk mendukung branding dan komunikasi organisasi.',

                'image_path' => 'images/logo/medbrand.png',
                'timeline_path' => 'images/timeline/medbrand.png'
            ],
            [
                'divisi' => 'Departemen Pengembangan Sumber Daya Mahasiswa',
                'deskripsi' => 'dalah sebuah wadah yang berfokus untuk mengembangkan kompetensi, soft & hard skill, serta karakter KM PKU IPB. Melalui berbagai program kerja yang dirancang, harapan nya Dept. PSDM dapat memberdayakan KM PKU agar mereka bisa mengenal, menemukan, dan mengembangkan potensi diri se-optimal mungkin sehingga terciptanya SDM yang berkualitas dan berdaya saing',

                'image_path' => 'images/logo/psdm.png',
                'timeline_path' => 'images/timeline/psdm.png'
            ],
            [
                'divisi' => 'Biro Kolaborasi dan Kemitraan',
                'deskripsi' => 'adalah sebuah biro baru yang dibentuk tahun ini sebagai biro yang mengelola hubungan antara Eksekutif PKU IPB dengan pihak eksternal yang ingin berkolaborasi atau bermitra. Berfungsi membangun diplomasi dan menjaga citra positif Ormawa Eksekutif PKU IPB, menunjang harmonisasi hubungan dengan pihak eksternal. ',

                'image_path' => 'images/logo/komit.png',
                'timeline_path' => 'images/timeline/komit.png'
            ],
            [
                'divisi' => 'Departemen Kajian dan Aksi Strategis',
                'deskripsi' => 'merupakan Departemen Ormawa Eksekutif PKU IPB yang memiliki fungsi sebagai penyedia landasan gerak untuk berfokus pada bidang Politik, Hukum, & HAM melalui advokasi, pencerdasan, dan katalisator sebagai pilar utama pergerakan organisasi. Departemen Kajian dan Aksi Strategis hadir sebagai wujud penyikapan terhadap isu-isu strategis dan insidental dalam mengembangkan pemikiran dan aksi nyata kepedulian mahasiswa terhadap isu-isu politik kebijakan kampus & nasional.',

                'image_path' => 'images/logo/kastrat.png',
                'timeline_path' => 'images/timeline/kastrat.png'
            ],
            [
                'divisi' => 'Departemen Ekonomi Kreatif',
                'deskripsi' => 'adalah elemen strategis organisasi yang berperan sebagai pusat inovasi dan keberlanjutan ekonomi. Departemen ini bertujuan untuk menciptakan ekosistem ekonomi kreatif yang inovatif dan berkelanjutan melalui kemampuan analisis finansial, kreativitas dalam menciptakan sumber pendapatan, dan pengelolaan keuangan yang mendalam. Ekraf dirancang untuk menjadi pionir dalam mendukung pertumbuhan dan keberlangsungan organisasi.',

                'image_path' => 'images/logo/ekraf.png',
                'timeline_path' => 'images/timeline/ekraf.png'
            ],
            [
                'divisi' => 'Departemen Pemuda dan Olahraga',
                'deskripsi' => 'adalah departemen yang berfokus pada pengembangan pemuda dan olahraga di kalangan mahasiswa KM PKU IPB. Peraga memiliki komitmen untuk memberikan wadah untuk memberdayakan dan mengekspresikan minat dan bakat dalam bidang olahraga sekaligus bertekad agar mahasiswa KM PKU IPB dapat mencapai potensi maksimalnya dalam pengembangan diri dari masing-masing individu. Departemen kami memiliki tujuan untuk terus mengasah keterampilan kami dalam bidang olahraga dan juga untuk memperluas jaringan sosial dan berkontribusi dalam membangun semangat sportifitas di kalangan mahasiswa.',

                'image_path' => 'images/logo/peraga.png',
                'timeline_path' => 'images/timeline/peraga.png'
            ],
            [
                'divisi' => 'Biro Riset Pengembangan',
                'deskripsi' => 'berfokus pada identifikasi kebutuhan, keresahan, dan aspirasi KM PKU IPB. Biro ini merumuskan solusi berbasis data dan analisis mendalam, serta mengembangkan teknologi digital untuk meningkatkan efisiensi dan aksesibilitas layanan Ormawa Eksekutif PKU IPB.',

                'image_path' => 'images/logo/risbang.png',
                'timeline_path' => 'images/timeline/risbang.png'
            ]
            ]);
    }
}
