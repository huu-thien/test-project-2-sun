// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className='block bg-[#f7f7f7]'>
      <div className='px-5 md:px-10'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='py-16 md:py-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col items-center font-semibold pt-4 sm:pt-0'>
                <div className='mb-4 ml-0 mr-0 lg:ml-0 lg:mr-0'>
                  <div className='font-bold uppercase'>CÔNG TY CỔ PHẦN CANIFA</div>
                </div>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Trung tâm trợ giúp
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Giới thiệu
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Tuyển dụng
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Với cộng đồng
                </a>
              </div>
              <div className='flex flex-col items-center font-semibold pt-4 sm:pt-0'>
                <div className='mb-4'>
                  <div className='font-bold uppercase'>Đón tiếp khách</div>
                </div>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Điều kiện - Điều khoản Chính sách KHTT
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Chính sách vận chuyển
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Gợi ý tìm size
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Kiểm tra đơn hàng
                </a>
              </div>
              <div className='flex flex-col items-center font-semibold pt-4 sm:pt-0'>
                <div className='mb-4'>
                  <div className='font-bold uppercase'>HỖ TRỢ</div>
                </div>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Trang tin tức
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Tính năng mới
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Cơ hội nghề nghiệp
                </a>
                <a href='#' className='py-2 font-normal text-[#636262] transition hover:text-[#302dd7]'>
                  Nhà đầu tư
                </a>
              </div>
              <div className='flex flex-col gap-4 items-center w-full text-center pb-4'>
                <a href='#' className='inline-block max-w-full'>
                  <img src='https://canifa.com/assets/images/logo.svg' alt='' className='inline-block w-full' />
                </a>
                <div>
                  <span>
                    <PlaceIcon sx={{ color: '#c92327', mr: 1, my: 1 }} />
                    <span className='text-[#636262]'>
                      Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành, Phường Ô Chợ Dừa, Quận Đống Đa,
                      Thành Phố Hà Nội.
                    </span>
                  </span>
                  <br />
                  <span>
                    <EmailIcon sx={{ color: '#fcce00', mr: 1 }} />
                    <a className='text-[#636262]' href='nhthien.dut@gmail.com'>
                      hello@canifa.com
                    </a>
                  </span>
                </div>
                {/* <div className='flex gap-4'>
                  <FacebookIcon sx={{ color: '#1976d2' }} />
                  <InstagramIcon sx={{ color: '#f2106f' }} />
                  <TwitterIcon sx={{ color: '#1c96e8' }} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
